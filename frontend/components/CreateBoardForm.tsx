import get from 'lodash/get'
import Router from 'next/router'
import React from 'react'
import theme from '../theme'
import {
  CreateBoardComponent,
  GetBoardsDocument,
  GetBoardsQuery,
} from '../__generated__/graphql'
import Button from './Button'
import ExternalLink from './ExternalLink'
import FormGroup from './FormGroup'
import { ExternalLinkIcon } from './Icon'
import Input from './Input'
import Label from './Label'
import PrimaryButton from './PrimaryButton'

interface CreateBoardFormProps {
  onCancel: () => void
}

const CreateBoardForm: React.FC<CreateBoardFormProps> = ({ onCancel }) => {
  const [values, setValues] = React.useState({ name: '', query: '' })
  return (
    <CreateBoardComponent
      variables={values}
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
            <FormGroup>
              <Label htmlFor="create-board-name">Board name</Label>
              <Input
                id="create-board-name"
                type="text"
                autoFocus={true}
                value={values.name}
                onChange={event =>
                  setValues({ ...values, name: event.currentTarget.value })
                }
                css={{ border: `1px solid ${theme.colors.gray[4]}` }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="create-board-query">GitHub query</Label>
              <Input
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
                  border: ` 1px solid ${theme.colors.gray[4]}`,
                  resize: 'vertical',
                }}
              />
              <ExternalLink
                href="https://help.github.com/en/articles/searching-issues-and-pull-requests"
                css={{
                  marginTop: theme.space[2],
                  fontSize: theme.fontSizes[1],
                  color: theme.colors.gray[7],
                }}
              >
                <ExternalLinkIcon
                  css={{
                    marginRight: theme.space[2],
                    color: theme.colors.gray[6],
                  }}
                />
                View GitHub's query syntax
              </ExternalLink>
            </FormGroup>
            <div
              css={{
                '& > :not(:last-child)': {
                  marginRight: theme.space[3],
                },
              }}
            >
              <PrimaryButton>Create board</PrimaryButton>
              <Button
                type="button"
                onClick={() => onCancel()}
                css={{
                  color: theme.colors.gray[7],
                  backgroundColor: 'transparent',
                  '&:hover:enabled': {
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
