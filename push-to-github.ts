import { Octokit } from '@octokit/rest';
import * as fs from 'fs';
import * as path from 'path';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;
  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function main() {
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });
  
  const owner = 'soufianechami';
  const repo = 'soufiane-chami-portfolio';
  
  // Get the authenticated user to verify
  const { data: user } = await octokit.users.getAuthenticated();
  console.log(`Authenticated as: ${user.login}`);
  
  // Check if repo exists
  try {
    await octokit.repos.get({ owner, repo });
    console.log(`Repo ${owner}/${repo} found`);
  } catch (e: any) {
    if (e.status === 404) {
      console.log('Repo not found, creating...');
      await octokit.repos.createForAuthenticatedUser({
        name: repo,
        private: false,
        description: 'Soufiane Chami - AI Infrastructure Architect & Strategic Operator - Portfolio Website'
      });
      console.log('Repo created');
    } else {
      throw e;
    }
  }
  
  // Collect all files to push
  const rootDir = '/home/runner/workspace';
  const ignorePaths = [
    'node_modules', '.git', 'dist', '.cache', '.config', '.local', 
    'attached_assets', '.replit', 'replit.nix', '.upm', 'generated-icon.png',
    'replit.md', 'server', 'shared', 'drizzle.config.ts', 'db'
  ];
  
  function shouldInclude(relativePath: string): boolean {
    const parts = relativePath.split('/');
    return !parts.some(p => ignorePaths.includes(p)) && !relativePath.startsWith('.');
  }
  
  function collectFiles(dir: string, base: string = ''): {path: string, content: string, encoding: string}[] {
    const files: {path: string, content: string, encoding: string}[] = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const relativePath = base ? `${base}/${entry.name}` : entry.name;
      const fullPath = path.join(dir, entry.name);
      
      if (!shouldInclude(relativePath)) continue;
      if (entry.name.startsWith('.') && entry.name !== '.github') continue;
      
      if (entry.isDirectory()) {
        files.push(...collectFiles(fullPath, relativePath));
      } else if (entry.isFile()) {
        try {
          // Check if binary
          const ext = path.extname(entry.name).toLowerCase();
          const binaryExts = ['.png', '.jpg', '.jpeg', '.gif', '.ico', '.woff', '.woff2', '.ttf', '.eot'];
          
          if (binaryExts.includes(ext)) {
            const content = fs.readFileSync(fullPath).toString('base64');
            files.push({ path: relativePath, content, encoding: 'base64' });
          } else {
            const content = fs.readFileSync(fullPath, 'utf8');
            files.push({ path: relativePath, content, encoding: 'utf-8' });
          }
        } catch (e) {
          console.log(`Skipping ${relativePath}: ${e}`);
        }
      }
    }
    return files;
  }
  
  console.log('Collecting files...');
  const files = collectFiles(rootDir);
  console.log(`Found ${files.length} files to push`);
  
  // Create tree entries
  const blobs = [];
  for (const file of files) {
    try {
      const { data: blob } = await octokit.git.createBlob({
        owner, repo,
        content: file.content,
        encoding: file.encoding as 'utf-8' | 'base64'
      });
      blobs.push({ path: file.path, mode: '100644' as const, type: 'blob' as const, sha: blob.sha });
    } catch (e) {
      console.log(`Error creating blob for ${file.path}: ${e}`);
    }
  }
  
  console.log(`Created ${blobs.length} blobs`);
  
  // Create tree
  const { data: tree } = await octokit.git.createTree({
    owner, repo,
    tree: blobs
  });
  
  // Get current commit (if any)
  let parentSha: string | undefined;
  try {
    const { data: ref } = await octokit.git.getRef({ owner, repo, ref: 'heads/main' });
    parentSha = ref.object.sha;
  } catch (e) {
    // No main branch yet
  }
  
  // Create commit
  const commitParams: any = {
    owner, repo,
    message: 'Deploy portfolio with GitHub Pages workflow',
    tree: tree.sha,
  };
  if (parentSha) {
    commitParams.parents = [parentSha];
  }
  
  const { data: commit } = await octokit.git.createCommit(commitParams);
  
  // Update or create ref
  try {
    await octokit.git.updateRef({
      owner, repo,
      ref: 'heads/main',
      sha: commit.sha,
      force: true
    });
  } catch (e) {
    await octokit.git.createRef({
      owner, repo,
      ref: 'refs/heads/main',
      sha: commit.sha
    });
  }
  
  console.log(`Successfully pushed to ${owner}/${repo}`);
  console.log(`Commit: ${commit.sha}`);
  console.log(`\nNext steps:`);
  console.log(`1. Go to https://github.com/${owner}/${repo}/settings/pages`);
  console.log(`2. Under "Source", select "GitHub Actions"`);
  console.log(`3. The workflow will automatically build and deploy your site`);
  console.log(`4. Your site will be available at https://${owner}.github.io/${repo}/`);
}

main().catch(console.error);
