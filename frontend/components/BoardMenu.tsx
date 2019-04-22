import get from 'lodash/get'
import React from 'react'
import { Instance } from 'tippy.js'
import theme from '../theme'
import {
  DeleteBoardComponent,
  GetBoardsDocument,
  GetBoardsQuery,
  UpdateBoardComponent,
} from '../__generated__/graphql'
import BoardForm from './BoardForm'
import Menu, { MenuDivider, MenuItem } from './Menu'

interface BoardCardProps {
  id: string
  name: string
  query: string
}

const BoardMenu: React.FC<
  BoardCardProps & React.HTMLProps<HTMLButtonElement>
> = ({ id, name, query, ...props }) => {
  const tippyInstance = React.useRef<Instance>(null)
  return (
    <Menu
      onCreate={instance =>
        // `RefObject.current` is read-only, so it must
        // be cast to `any` in order to be reassigned.
        // References:
        // * https://git.io/fj3Lh
        // * https://git.io/fj3tT
        ((tippyInstance.current as any) = instance)
      }
      content={
        <>
          <UpdateBoardComponent
            update={(proxy, mutationResult) => {
              const queryResult = proxy.readQuery<GetBoardsQuery>({
                query: GetBoardsDocument,
              })

              if (queryResult && queryResult.signedInUser.boards) {
                const boards = queryResult.signedInUser.boards.map(board => {
                  return board.id === get(mutationResult, 'data.updateBoard.id')
                    ? get(mutationResult, 'data.updateBoard')
                    : board
                })

                proxy.writeQuery({
                  query: GetBoardsDocument,
                  data: {
                    signedInUser: { ...queryResult.signedInUser, boards },
                  },
                })
              }
            }}
          >
            {updateBoard => (
              <BoardForm
                initialValues={{ name, query }}
                onSubmit={values => {
                  updateBoard({ variables: { id, ...values } })
                  if (tippyInstance.current) {
                    tippyInstance.current.hide()
                  }
                }}
              />
            )}
          </UpdateBoardComponent>
          <MenuDivider />
          <DeleteBoardComponent
            variables={{ id }}
            update={(proxy, mutationResult) => {
              const queryResult = proxy.readQuery<GetBoardsQuery>({
                query: GetBoardsDocument,
              })

              if (queryResult && queryResult.signedInUser.boards) {
                const boards = queryResult.signedInUser.boards.filter(board => {
                  return board.id !== get(mutationResult, 'data.deleteBoard.id')
                })

                proxy.writeQuery({
                  query: GetBoardsDocument,
                  data: {
                    signedInUser: { ...queryResult.signedInUser, boards },
                  },
                })
              }
            }}
          >
            {deleteBoard => (
              <MenuItem
                onClick={() => {
                  if (window.confirm(`Delete "${name}"?`)) {
                    deleteBoard()
                  }
                }}
              >
                Delete
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
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          css={{ verticalAlign: 'text-bottom' }}
        >
          <circle cx="7.5" cy="7.5" r="1.5" />
          <circle cx="1.5" cy="7.5" r="1.5" />
          <circle cx="13.5" cy="7.5" r="1.5" />
        </svg>
      </button>
    </Menu>
  )
}

export default BoardMenu
