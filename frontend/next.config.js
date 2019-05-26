const withTypescript = require('@zeit/next-typescript')

const config = {
  target: 'serverless',
  env: {
    apiEndpoint: process.env.API_ENDPOINT || '/graphql',
    githubClientId: process.env.GH_CLIENT_ID,
    githubRedirectUri:
      process.env.GH_REDIRECT_URI || 'http://localhost:3000/callback',
  },
}

module.exports = withTypescript(config)
