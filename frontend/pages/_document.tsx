import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

interface MyDocumentProps {
  styleTags: Array<React.ReactElement<{}>>
}

class MyDocument extends Document<MyDocumentProps> {
  public static getInitialProps({ renderPage }: NextDocumentContext) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  public render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
