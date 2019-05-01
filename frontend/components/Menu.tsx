import Tippy, { TippyProps } from '@tippy.js/react'
import React from 'react'
import theme from '../theme'

const Menu: React.FC<TippyProps> = props => {
  return (
    <Tippy
      trigger="click"
      interactive={true}
      arrow={true}
      arrowType="round"
      duration={150}
      placement="bottom"
      appendTo="parent"
      onMount={({ reference }) => {
        reference.setAttribute('aria-expanded', 'true')
      }}
      onHide={({ reference }) => {
        reference.setAttribute('aria-expanded', 'false')
      }}
      css={{
        minWidth: '10rem',
        padding: `${theme.space[2]} 0`,
        textAlign: 'left',
        lineHeight: theme.lineHeights.normal,
        backgroundColor: theme.colors.gray[9],
        borderRadius: theme.radii[2],
        boxShadow: theme.shadows.medium,
        '.tippy-roundarrow': {
          fill: theme.colors.gray[9],
        },
      }}
      {...props}
    />
  )
}

export const MenuItem: React.FC<React.HTMLProps<HTMLButtonElement>> = props => {
  return (
    <button
      css={{
        width: '100%',
        padding: `${theme.space[2]} ${theme.space[4]}`,
        textAlign: 'left',
        fontSize: theme.fontSizes[1],
        lineHeight: theme.lineHeights.none,
        color: 'inherit',
        backgroundColor: 'transparent',
        border: 0,
        appearance: 'none',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: theme.colors.gray[8],
        },
      }}
      {...props}
    />
  )
}

export const MenuDivider: React.FC = () => {
  return (
    <div
      css={{
        margin: `${theme.space[2]} 0`,
        borderTop: `1px solid ${theme.colors.gray[7]}`,
      }}
    />
  )
}

export default Menu
