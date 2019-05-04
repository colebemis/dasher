import get from 'lodash/get'
import isEqual from 'lodash/isEqual'
import Router from 'next/router'
import React from 'react'
import { Instance } from 'tippy.js'
import theme from '../theme'
import {
  DeleteBoardComponent,
  GetBoardsDocument,
  GetBoardsQuery,
  UpdateBoardComponent,
} from '../__generated__/graphql'
import { EllipsesIcon, TrashIcon } from './Icon'
import Menu, { MenuDivider, MenuItem } from './Menu'
import UpdateBoardForm from './UpdateBoardForm'

interface BoardMenuProps {
  id: string
  name: string
  query: string
}

const BoardMenu: React.FC<
  BoardMenuProps & React.HTMLProps<HTMLButtonElement>
> = ({ id, name, query, ...props }) => {
  const tippyInstance = React.useRef<Instance>(null)
  const [formValues, setFormValues] = React.useState({ name, query })
  return (
    <Menu
      onCreate={instance =>
        // `RefObject.current` is read-only, so it must
        // be cast to `any` in order to be reassigned.
        // Reference: https://git.io/fj3Lh
        ((tippyInstance.current as any) = instance)
      }
      onHidden={() => setFormValues({ name, query })}
      content={
        <>
          <UpdateBoardComponent
            variables={{ id, ...formValues }}
            refetchQueries={[{ query: GetBoardsDocument }]}
          >
            {updateBoard => (
              <UpdateBoardForm
                values={formValues}
                isDirty={!isEqual(formValues, { name, query })}
                onChange={setFormValues}
                onSubmit={() => {
                  updateBoard()
                  if (tippyInstance.current) {
                    tippyInstance.current.hide()
                  }
                }}
                onReset={() => setFormValues({ name, query })}
              />
            )}
          </UpdateBoardComponent>
          <MenuDivider />
          <DeleteBoardComponent
            variables={{ id }}
            refetchQueries={[{ query: GetBoardsDocument }]}
          >
            {deleteBoard => (
              <MenuItem
                onClick={() => {
                  if (window.confirm(`Delete "${name}" board?`)) {
                    deleteBoard()
                    if (Router.pathname === '/board') {
                      Router.push('/')
                    }
                  }
                }}
                css={{
                  '&:hover': {
                    color: theme.colors.red[8],
                    svg: {
                      color: theme.colors.red[6],
                    },
                  },
                }}
              >
                <TrashIcon
                  css={{
                    marginRight: theme.space[3],
                    color: theme.colors.gray[6],
                  }}
                />
                Delete board
              </MenuItem>
            )}
          </DeleteBoardComponent>
        </>
      }
    >
      <button
        aria-label="Menu"
        aria-haspopup="true"
        aria-expanded="false"
        css={{
          padding: theme.space[2],
          color: theme.colors.gray[6],
          backgroundColor: 'transparent',
          border: 0,
          borderRadius: theme.radii[1],
          appearance: 'none',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: theme.colors.gray[1],
          },
        }}
        {...props}
      >
        <EllipsesIcon />
      </button>
    </Menu>
  )
}

export default BoardMenu
