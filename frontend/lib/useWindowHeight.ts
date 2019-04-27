import React from 'react'

function useWindowHeight() {
  const [windowHeight, setWindowHeight] = React.useState<string | number>(
    '100vh',
  )

  function updateWindowHeight() {
    setWindowHeight(window.innerHeight)
  }

  React.useEffect(() => {
    window.addEventListener('resize', updateWindowHeight)
    return function cleanup() {
      window.removeEventListener('resize', updateWindowHeight)
    }
  })

  return windowHeight
}

export default useWindowHeight
