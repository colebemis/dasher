import Document, {
  Html,
  Head,
  Main,
  NextScript,
  NextDocumentContext,
} from 'next/document'
import { resetServerContext } from 'react-beautiful-dnd'

class MyDocument extends Document {
  static async getInitialProps(context: NextDocumentContext) {
    // Ensures react-beatiful-dnd context state does not persist across multiple
    // renders on the server which would result in client/server markup
    // mismatches after multiple requests are rendered on the server.
    // Reference: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/reset-server-context.md
    resetServerContext()
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
