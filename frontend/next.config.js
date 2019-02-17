const withTypescript = require('@zeit/next-typescript')

const config = {
  env: {
    apiEndpoint: process.env.API_ENDPOINT || 'http://localhost:4000',
  },
}

module.exports = withTypescript(config)
