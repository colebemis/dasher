import App, { Container } from 'next/app'
import Head from 'next/head'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Dasher</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
