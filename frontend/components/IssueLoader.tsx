import ContentLoader from 'react-content-loader'
import theme from '../theme'

const IssueLoader = () => {
  return (
    <ContentLoader
      width={300}
      height={36}
      speed={2}
      primaryColor={theme.colors.gray[1]}
      secondaryColor={theme.colors.gray[2]}
      css={{ width: 300 }}
    >
      <circle cx="8" cy="8" r="8" />
      <rect x="28" y="4" rx="3" ry="3" width="240" height="8" />
      <rect x="28" y="28" rx="3" ry="3" width="160" height="8" />
    </ContentLoader>
  )
}

export default IssueLoader
