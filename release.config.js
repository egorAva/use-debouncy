module.exports = {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        tarballDir: 'lib',
      },
    ],
    ['@semantic-release/git', { assets: ['CHANGELOG.md', 'package.json'] }],
    [
      '@semantic-release/github',
      {
        assets: ['lib/**'],
      },
    ],
    [
      '@semantic-release/exec',
      {
        publishCmd:
          './node_modules/.bin/bit tag --scope ${nextRelease.version} --force && ./node_modules/.bin/bit export',
      },
    ],
  ],
};
