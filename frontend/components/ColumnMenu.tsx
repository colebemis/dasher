import get from 'lodash/get'
import isEqual from 'lodash/isEqual'
import React from 'react'
import { Instance } from 'tippy.js'
import theme from '../theme'
import {
  DeleteColumnComponent,
  GetBoardDocument,
  GetBoardQuery,
  UpdateColumnComponent,
} from '../__generated__/graphql'
import { EllipsesIcon, TrashIcon } from './Icon'
import Menu, { MenuDivider, MenuItem } from './Menu'
import UpdateColumnForm from './UpdateColumnForm'

interface ColumnMenuProps {
  boardId: string
  id: string
  name: string
  query: string
}

const BoardMenu: React.FC<
  ColumnMenuProps & React.HTMLProps<HTMLButtonElement>
> = ({ boardId, id, name, query, ...props }) => {
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
          <UpdateColumnComponent variables={{ id, ...formValues }}>
            {updateColumn => (
              <UpdateColumnForm
                values={formValues}
                isDirty={!isEqual(formValues, { name, query })}
                onChange={setFormValues}
                onSubmit={() => {
                  updateColumn()
                  if (tippyInstance.current) {
                    tippyInstance.current.hide()
                  }
                }}
                onReset={() => setFormValues({ name, query })}
              />
            )}
          </UpdateColumnComponent>
          <MenuDivider />
          <DeleteColumnComponent
            variables={{ id }}
            update={(proxy, mutationResult) => {
              const queryResult = proxy.readQuery<GetBoardQuery>({
                query: GetBoardDocument,
                variables: { id: boardId },
              })

              if (
                queryResult &&
                queryResult.board &&
                queryResult.board.columns
              ) {
                const columns = queryResult.board.columns.filter(column => {
                  return (
                    column.id !== get(mutationResult, 'data.deleteColumn.id')
                  )
                })

                proxy.writeQuery({
                  query: GetBoardDocument,
                  variables: { id: boardId },
                  data: { board: { ...queryResult.board, columns } },
                })
              }
            }}
          >
            {deleteColumn => (
              <MenuItem
                onClick={() => {
                  if (window.confirm(`Delete "${name}" column?`)) {
                    deleteColumn()
                  }
                }}
                css={{
                  '&:hover svg': {
                    color: theme.colors.red[6],
                  },
                }}
              >
                <TrashIcon
                  css={{
                    marginRight: theme.space[3],
                    color: theme.colors.gray[6],
                  }}
                />
                Delete column
              </MenuItem>
            )}
          </DeleteColumnComponent>
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
