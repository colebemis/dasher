import React from 'react'
import { withApollo, WithApolloClient } from 'react-apollo'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd'
import theme from '../theme'
import {
  GetBoardDocument,
  GetBoardQuery,
  UpdateColumnDocument,
  UpdateColumnMutation,
} from '../__generated__/graphql'
import Column from './Column'
import CreateColumnButton from './CreateColumnButton'
import { useUser } from './UserContext'

interface ColumnsProps {
  board: NonNullable<GetBoardQuery['board']>
}

const Columns: React.FC<WithApolloClient<ColumnsProps>> = ({
  board,
  client,
}) => {
  const user = useUser()

  function handleDragEnd(result: DropResult) {
    if (!board.columns || !result.destination) return

    const columns = reorder(
      board.columns,
      result.source.index,
      result.destination.index,
    ).map((column, index) => ({ ...column, index }))

    columns.forEach(column => {
      client.mutate<UpdateColumnMutation>({
        mutation: UpdateColumnDocument,
        variables: {
          id: column.id,
          index: column.index,
        },
      })
    })

    const data = client.readQuery({
      query: GetBoardDocument,
      variables: { id: board.id },
    })

    client.writeQuery({
      query: GetBoardDocument,
      variables: { id: board.id },
      data: { ...data, board: { ...data.board, columns } },
    })
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable
        droppableId="droppable"
        direction="horizontal"
        isDropDisabled={!user || user.id !== board.owner.id}
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            css={{
              display: 'flex',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              flexGrow: 1,
            }}
            {...provided.droppableProps}
          >
            <div
              css={{
                display: 'flex',
                padding: theme.space[5],
                '& > :not(:last-child)': {
                  marginRight: theme.space[4],
                },
                [theme.mediaQueries.medium]: {
                  padding: theme.space[6],
                },
              }}
            >
              {board.columns
                ? board.columns.map((column, index) => (
                    <Draggable
                      key={column.id}
                      draggableId={column.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          css={{
                            display: 'flex',
                            alignItems: 'stretch',
                          }}
                        >
                          <Column
                            board={board}
                            id={column.id}
                            name={column.name}
                            query={column.query}
                            isDragging={snapshot.isDragging}
                            dragHandleProps={provided.dragHandleProps}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))
                : null}
              {provided.placeholder}
              <CreateColumnButton
                boardId={board.id}
                index={board.columns ? board.columns.length : 0}
              />
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

function reorder<T>(list: T[], from: number, to: number) {
  const listCopy = [...list]
  const [removed] = listCopy.splice(from, 1)
  listCopy.splice(to, 0, removed)
  return listCopy
}

export default withApollo(Columns)
