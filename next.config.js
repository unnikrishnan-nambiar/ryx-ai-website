/** @type {import('next').NextConfig} */

// Set only by .github/workflows/deploy-pages.yml. GitHub Pages serves the
// repo at https://<user>.github.io/<repo>/, so the static export needs a
// basePath — and it can't run the image optimizer, so images are unoptimized
// unconditionally (harmless for local/Vercel too, since our images are small
// local files).
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'ryx-ai-website';

const nextConfig = {
  reactStrictMode: true,
  // Don't auto-generate AGENTS.md/CLAUDE.md in the repo root.
  agentRules: false,
  images: { unoptimized: true },
  ...(isGithubPages && {
    output: 'export',
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
};

module.exports = nextConfig;
