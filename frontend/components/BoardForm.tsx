import React, { SyntheticEvent } from 'react'
import posed from 'react-pose'
import theme from '../theme'
import Field from './Field'
import Label from './Label'

const PosedButtonGroup = posed.div({
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 100 },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 100 },
  },
})

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
      <PosedButtonGroup
        pose={isDirty ? 'open' : 'closed'}
        css={{ width: '100%' }}
      >
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: theme.space[3],
            marginTop: theme.space[4],
          }}
        >
          <button type="button" disabled={!isDirty} onClick={() => onReset()}>
            Reset
          </button>
          <button disabled={!isDirty}>Apply</button>
        </div>
      </PosedButtonGroup>
    </form>
  )
}

export default BoardForm
