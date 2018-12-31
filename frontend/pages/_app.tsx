import {} from '@emotion/core' // Include type definitions for emotion https://git.io/fhv7b
import { ApolloClient } from 'apollo-boost'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from 'react-apollo'
import GlobalStyles from '../components/GlobalStyles'
import withApollo from '../lib/withApollo'

interface MyAppProps {
  apollo: ApolloClient<{}>
}

class MyApp extends App<MyAppProps> {
  public render() {
    const { apollo, Component, pageProps } = this.props

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Dasher</title>
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
