import React from 'react'
import theme from '../theme'
import Button from './Button'
import Field from './Field'
import { ExternalLinkIcon } from './Icon'
import Label from './Label'
import {
  CreateBoardComponent,
  GetBoardsDocument,
  GetBoardsQuery,
} from '../__generated__/graphql'
import Router from 'next/router'
import get from 'lodash/get'

interface CreateBoardFormProps {
  onCancel: () => void
}

const CreateBoardForm: React.FC<CreateBoardFormProps> = ({ onCancel }) => {
  const [values, setValues] = React.useState({ name: '', query: '' })
  return (
    <CreateBoardComponent
      variables={{ name: values.name, query: values.query }}
      update={(proxy, mutationResult) => {
        const queryResult = proxy.readQuery<GetBoardsQuery>({
          query: GetBoardsDocument,
        })

        if (queryResult && queryResult.signedInUser.boards) {
          const boards = [
            get(mutationResult, 'data.createBoard'),
            ...queryResult.signedInUser.boards,
          ]
          proxy.writeQuery({
            query: GetBoardsDocument,
            data: {
              signedInUser: { ...queryResult.signedInUser, boards },
            },
          })
        }
      }}
    >
      {createBoard => {
        async function handleSubmit(event: React.SyntheticEvent) {
          event.preventDefault()
          const result = await createBoard()
          if (result && result.data) {
            Router.push(`/board?id=${result.data.createBoard.id}`)
          }
        }
        return (
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              padding: theme.space[4],
              backgroundColor: theme.colors.white,
              borderRadius: theme.radii[2],
              boxShadow: theme.shadows.small,
              '& > :not(:last-child)': {
                marginBottom: theme.space[4],
              },
              [theme.mediaQueries.medium]: {
                padding: theme.space[5],
                '& > :not(:last-child)': {
                  marginBottom: theme.space[5],
                },
              },
            }}
          >
            <div
              css={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Label htmlFor="create-board-name">Board name</Label>
              <Field
                id="create-board-name"
                type="text"
                autoFocus={true}
                value={values.name}
                onChange={event =>
                  setValues({ ...values, name: event.currentTarget.value })
                }
                css={{ boxShadow: `inset 0 0 0 1px ${theme.colors.gray[4]}` }}
              />
            </div>
            <div
              css={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Label htmlFor="create-board-query">GitHub query</Label>
              <Field
                as="textarea"
                id="create-board-query"
                value={values.query}
                onChange={event =>
                  setValues({ ...values, query: event.currentTarget.value })
                }
                onKeyPress={event => {
                  // Make `Enter` submit the form instead of adding a new line.
                  if (event.key === 'Enter') {
                    handleSubmit(event)
                  }
                }}
                css={{
                  boxShadow: `inset 0 0 0 1px ${theme.colors.gray[4]}`,
                  resize: 'vertical',
                }}
              />
              <a
                href="https://help.github.com/en/articles/searching-issues-and-pull-requests"
                target="_blank"
                rel="noopener noreferrer"
                css={{
                  marginTop: theme.space[2],
                  fontSize: theme.fontSizes[1],
                  fontWeight: theme.fontWeights.normal,
                  color: theme.colors.gray[7],
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <ExternalLinkIcon
                  css={{
                    marginRight: theme.space[2],
                    color: theme.colors.gray[6],
                  }}
                />
                View GitHub's query syntax
              </a>
            </div>
            <div
              css={{
                '& > :not(:last-child)': {
                  marginRight: theme.space[3],
                },
              }}
            >
              <Button
                css={{
                  color: theme.colors.white,
                  backgroundColor: theme.colors.primary[7],
                  boxShadow: theme.shadows.small,
                  '&:hover:enabled': {
                    backgroundColor: theme.colors.primary[6],
                  },
                }}
              >
                Create board
              </Button>
              <Button
                type="button"
                onClick={() => onCancel()}
                css={{
                  color: theme.colors.gray[7],
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: theme.colors.gray[1],
                  },
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        )
      }}
    </CreateBoardComponent>
  )
}

export default CreateBoardForm
