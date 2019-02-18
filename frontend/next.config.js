const withTypescript = require('@zeit/next-typescript')

const config = {
  env: {
    apiEndpoint: process.env.API_ENDPOINT || 'http://localhost:4000',
    githubClientId: '6394b4fd5f4f0606b2f7',
    githubRedirectUri: 'http://localhost:3000/callback',
  },
}

module.exports = withTypescript(config)
