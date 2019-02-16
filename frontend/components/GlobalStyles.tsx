import { Global } from '@emotion/core'

const GlobalStyles: React.FC<{}> = () => {
  return (
    <Global
      styles={{
        body: {
          boxSizing: 'border-box',
          margin: 0,
          fontFamily: 'system-ui, sans-serif',
        },
        '*, *::before, *::before': {
          boxSizing: 'inherit',
        },
      }}
    />
  )
}
export default GlobalStyles
