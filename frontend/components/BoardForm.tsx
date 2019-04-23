import React, { SyntheticEvent } from 'react'
import theme from '../theme'
import Button from './Button'
import Field from './Field'
import Label from './Label'

interface BoardFormValues {
  name: string
  query: string
}

interface BoardFormProps {
  values: BoardFormValues
  isDirty: boolean
  onChange: (values: BoardFormValues) => void
  onSubmit: () => void
  onReset: () => void
}

const BoardForm: React.FC<BoardFormProps> = ({
  values,
  isDirty,
  onChange,
  onSubmit,
  onReset,
}) => {
  function handleSubmit(event: SyntheticEvent) {
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
      <Label htmlFor="name">Name</Label>
      <Field
        id="name"
        type="text"
        value={values.name}
        onChange={event =>
          onChange({ ...values, name: event.currentTarget.value })
        }
      />
      <div css={{ marginBottom: theme.space[4] }} />
      <Label htmlFor="query">GitHub query</Label>
      <Field
        as="textarea"
        id="query"
        spellCheck={false}
        value={values.query}
        onChange={event =>
          onChange({ ...values, query: event.currentTarget.value })
        }
        onKeyPress={event => {
          if (event.key === 'Enter' && !event.shiftKey) {
            handleSubmit(event)
          }
        }}
        css={{ resize: 'vertical' }}
      />
      <a
        href="https://help.github.com/en/articles/searching-issues-and-pull-requests"
        target="_blank"
        rel="noopener noreferrer"
        css={{
          display: 'flex',
          alignItems: 'center',
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
        View GitHub's search syntax
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

export default BoardForm
