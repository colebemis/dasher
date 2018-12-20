const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  publicRuntimeConfig: {
    apiEndpoint: process.env.API_ENDPOINT || 'http://localhost:4000',
  },
})
