import { keyframes } from '@emotion/core'
import React from 'react'

const spinnerSize = 14

const spinnerKeyframes = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
    strokeDashoffset: (Math.PI * spinnerSize) / 8,
  },
  '50%': {
    transform: 'rotate(720deg)',
    strokeDashoffset: Math.PI * spinnerSize,
  },
  '100%': {
    transform: 'rotate(1080deg)',
    strokeDashoffset: (Math.PI * spinnerSize) / 8,
  },
})

const Spinner: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      aria-hidden={true}
      {...props}
    >
      <circle
        cx={8}
        cy={8}
        r={spinnerSize / 2}
        css={{
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeDasharray: Math.PI * spinnerSize, // Circumference of spinner
          transformOrigin: 'center center',
          animation: `${spinnerKeyframes} 2s linear infinite`,
        }}
      />
    </svg>
  )
}

export default Spinner
