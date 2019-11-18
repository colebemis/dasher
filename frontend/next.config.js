const withTypescript = require('@zeit/next-typescript')

const config = {
  target: 'serverless',
  env: {
    apiEndpoint: process.env.API_ENDPOINT || 'http://localhost:4000/graphql',
    githubClientId: process.env.GITHUB_CLIENT_ID || '6394b4fd5f4f0606b2f7',
    githubRedirectUri:
      process.env.GITHUB_REDIRECT_URI || 'http://localhost:3000/callback',
  },
}

module.exports = withTypescript(config)
