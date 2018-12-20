const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW_REGION
    ? require('next/constants')
    : require('next-server/constants')

module.exports = phase => {
  const config = {
    publicRuntimeConfig: {
      apiEndpoint: process.env.API_ENDPOINT || 'http://localhost:4000',
    },
  }

  // Don't use build plugins in production phase
  // https://git.io/fhvat
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return config
  }

  const withTypescript = require('@zeit/next-typescript')

  return withTypescript(config)
}
