import React from 'react'
import Button from '../components/Button'
import CreateColumnForm from '../components/CreateColumnForm'
import { PlusIcon } from '../components/Icon'
import theme from '../theme'
import {
  CreateColumnComponent,
  GetBoardDocument,
} from '../__generated__/graphql'

interface CreateColumnButtonProps {
  boardId: string
}

const CreateColumnButton: React.FC<CreateColumnButtonProps> = ({ boardId }) => {
  const [
    isCreateColumnFormVisible,
    setIsCreateColumnFormVisible,
  ] = React.useState(false)
  return (
    <div
      css={{
        width: 320,
        [theme.mediaQueries.medium]: {
          width: 360,
        },
      }}
    >
      {isCreateColumnFormVisible ? (
        <CreateColumnComponent
          awaitRefetchQueries={true}
          refetchQueries={[
            {
              query: GetBoardDocument,
              variables: { id: boardId },
            },
          ]}
        >
          {createColumn => (
            <CreateColumnForm
              onSubmit={async values => {
                await createColumn({
                  variables: {
                    boardId,
                    ...values,
                  },
                })
                setIsCreateColumnFormVisible(false)
              }}
              onCancel={() => setIsCreateColumnFormVisible(false)}
            />
          )}
        </CreateColumnComponent>
      ) : (
        <Button
          onClick={() => setIsCreateColumnFormVisible(true)}
          css={{
            width: '100%',
            padding: theme.space[8],
            color: theme.colors.gray[7],
            backgroundColor: theme.colors.gray[2],
            borderRadius: theme.radii[2],
            '&:hover': {
              backgroundColor: theme.colors.gray[3],
            },
          }}
        >
          <PlusIcon
            css={{
              marginRight: theme.space[2],
              color: theme.colors.gray[6],
            }}
          />
          Add column
        </Button>
      )}
    </div>
  )
}

export default CreateColumnButton
