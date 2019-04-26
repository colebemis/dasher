import React from 'react'
import theme from '../theme'
import Button from './Button'
import Field from './Field'
import { ExternalLinkIcon } from './Icon'
import Label from './Label'

interface UpdateBoardFormValues {
  name: string
  query: string
}

interface UpdateBoardFormProps {
  values: UpdateBoardFormValues
  isDirty: boolean
  onChange: (values: UpdateBoardFormValues) => void
  onSubmit: () => void
  onReset: () => void
}

const UpdateBoardForm: React.FC<UpdateBoardFormProps> = ({
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
        alignItems: 'flex-start',
        width: '18rem',
        padding: `${theme.space[2]} ${theme.space[4]}`,
      }}
    >
      <Label htmlFor="update-board-name" css={{ color: theme.colors.gray[5] }}>
        Board name
      </Label>
      <Field
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
      <div css={{ marginBottom: theme.space[4] }} />
      <Label htmlFor="update-board-query" css={{ color: theme.colors.gray[5] }}>
        GitHub query
      </Label>
      <Field
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
      <a
        href="https://help.github.com/en/articles/searching-issues-and-pull-requests"
        target="_blank"
        rel="noopener noreferrer"
        css={{
          marginTop: theme.space[2],
          fontSize: theme.fontSizes[1],
          fontWeight: theme.fontWeights.normal,
          color: theme.colors.gray[5],
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        <ExternalLinkIcon
          css={{ marginRight: theme.space[2], color: theme.colors.gray[6] }}
        />
        View GitHub's query syntax
      </a>
      {isDirty ? (
        <div
          css={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: theme.space[3],
            marginTop: theme.space[4],
          }}
        >
          <Button
            type="button"
            onClick={() => onReset()}
            css={{
              color: theme.colors.white,
              backgroundColor: theme.colors.gray[8],
              boxShadow: theme.shadows.small,
              '&:hover': {
                backgroundColor: theme.colors.gray[7],
              },
            }}
          >
            Reset
          </Button>
          <Button
            css={{
              color: theme.colors.white,
              backgroundColor: theme.colors.primary[7],
              boxShadow: theme.shadows.small,
              '&:hover': {
                backgroundColor: theme.colors.primary[6],
              },
            }}
          >
            Apply
          </Button>
        </div>
      ) : null}
    </form>
  )
}

export default UpdateBoardForm
