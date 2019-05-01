import React from 'react'
import theme from '../theme'
import Button from './Button'
import ExternalLink from './ExternalLink'
import FormGroup from './FormGroup'
import { ExternalLinkIcon } from './Icon'
import Input from './Input'
import Label from './Label'
import PrimaryButton from './PrimaryButton'

interface UpdateColumnFormValues {
  name: string
  query: string
}

interface UpdateColumnFormProps {
  values: UpdateColumnFormValues
  isDirty: boolean
  onChange: (values: UpdateColumnFormValues) => void
  onSubmit: () => void
  onReset: () => void
}

const UpdateColumnForm: React.FC<UpdateColumnFormProps> = ({
  values,
  isDirty,
  onChange,
  onSubmit,
  onReset,
}) => {
  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    onSubmit()
  }
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '18rem',
        padding: `${theme.space[2]} ${theme.space[4]}`,
        '& > :not(:last-child)': {
          marginBottom: theme.space[4],
        },
      }}
    >
      <FormGroup>
        <Label
          htmlFor="update-board-name"
          css={{ color: theme.colors.gray[5] }}
        >
          Column name
        </Label>
        <Input
          id="update-board-name"
          type="text"
          value={values.name}
          onChange={event =>
            onChange({ ...values, name: event.currentTarget.value })
          }
          css={{
            backgroundColor: theme.colors.gray[8],
            boxShadow: theme.shadows.small,
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="update-board-query"
          css={{ color: theme.colors.gray[5] }}
        >
          GitHub query
        </Label>
        <Input
          as="textarea"
          id="update-board-query"
          spellCheck={false}
          value={values.query}
          onChange={event =>
            onChange({ ...values, query: event.currentTarget.value })
          }
          onKeyPress={event => {
            // Make `Enter` submit the form instead of adding a new line.
            if (event.key === 'Enter') {
              handleSubmit(event)
            }
          }}
          css={{
            backgroundColor: theme.colors.gray[8],
            boxShadow: theme.shadows.small,
            resize: 'vertical',
          }}
        />
        <ExternalLink
          href="https://help.github.com/en/articles/searching-issues-and-pull-requests"
          css={{
            marginTop: theme.space[2],
            fontSize: theme.fontSizes[1],
            color: theme.colors.gray[5],
          }}
        >
          <ExternalLinkIcon
            css={{ marginRight: theme.space[2], color: theme.colors.gray[6] }}
          />
          View GitHub's query syntax
        </ExternalLink>
      </FormGroup>
      {isDirty ? (
        <div
          css={{
            display: 'flex',
            '& > :not(:last-child)': {
              marginRight: theme.space[3],
            },
          }}
        >
          <Button
            type="button"
            onClick={() => onReset()}
            css={{
              flexGrow: 1,
              color: theme.colors.white,
              backgroundColor: theme.colors.gray[8],
              boxShadow: theme.shadows.small,
              '&:hover:enabled': {
                backgroundColor: theme.colors.gray[7],
              },
            }}
          >
            Reset
          </Button>
          <PrimaryButton css={{ flexGrow: 1 }}>Apply</PrimaryButton>
        </div>
      ) : null}
    </form>
  )
}

export default UpdateColumnForm
