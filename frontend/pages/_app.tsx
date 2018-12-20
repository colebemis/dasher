import { ApolloClient } from 'apollo-boost'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from 'react-apollo'
import withApollo from '../lib/withApollo'

interface MyAppProps {
  apollo: ApolloClient<any>
}

class MyApp extends App<MyAppProps> {
  render() {
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
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
