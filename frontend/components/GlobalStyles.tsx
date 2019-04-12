import { Global } from '@emotion/core'
import theme from '../theme'

const GlobalStyles: React.FC<{}> = () => {
  return (
    <Global
      styles={{
        body: {
          boxSizing: 'border-box',
          margin: 0,
          fontFamily: theme.fonts.sansSerif,
          lineHeight: theme.lineHeights.normal,
          color: theme.colors.gray[8],
          backgroundColor: theme.colors.gray[0],
        },
        '*, *::before, *::before': {
          boxSizing: 'inherit',
        },
      }}
    />
  )
}
export default GlobalStyles
