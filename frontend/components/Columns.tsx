import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import theme from '../theme'
import { GetBoardQuery } from '../__generated__/graphql'
import Column from './Column'
import CreateColumnButton from './CreateColumnButton'

interface ColumnsProps {
  board: NonNullable<GetBoardQuery['board']>
}

const Columns: React.FC<ColumnsProps> = ({ board }) => {
  return (
    <DragDropContext onDragEnd={console.log}>
      <Droppable droppableId="droppable" direction="horizontal">
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
                            boardId={board.id}
                            boardQuery={board.query}
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

export default Columns
