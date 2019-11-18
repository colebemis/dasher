import {} from '@emotion/core' // Include type definitions for emotion https://git.io/fhv7b
import { ApolloClient } from 'apollo-boost'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from 'react-apollo'
import GlobalStyles from '../components/GlobalStyles'
import withApollo from '../lib/withApollo'
import { UserProvider } from '../components/UserContext'

interface MyAppProps {
  apollo: ApolloClient<{}>
}

class MyApp extends App<MyAppProps> {
  public render() {
    const { apollo, Component, pageProps } = this.props

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <UserProvider>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <title>Dasher</title>
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
          </UserProvider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
