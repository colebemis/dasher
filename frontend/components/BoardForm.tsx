import React from 'react'
import theme from '../theme'

interface BoardFormValues {
  name: string
  query: string
}

interface BoardFormProps {
  initialValues: BoardFormValues
  onSubmit: (values: BoardFormValues) => void
}

const BoardForm: React.FC<BoardFormProps> = ({ initialValues, onSubmit }) => {
  const [values, setValues] = React.useState(initialValues)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(values)
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
        padding: `${theme.space[1]} ${theme.space[4]} ${theme.space[2]}`,
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={values.name}
        onChange={event => setValues({ ...values, name: event.target.value })}
        css={{ width: '100%' }}
      />
      <label htmlFor="query">GitHub query</label>
      <textarea
        id="query"
        spellCheck={false}
        value={values.query}
        onChange={event => setValues({ ...values, query: event.target.value })}
        css={{ width: '100%', resize: 'vertical' }}
      />
      <a
        href="https://help.github.com/en/articles/searching-issues-and-pull-requests"
        target="_blank"
        rel="noopener noreferrer"
      >
        View GitHub's search syntax
      </a>
      <div>
        <button type="button" onClick={() => setValues(initialValues)}>
          Reset
        </button>
        <button>Apply</button>
      </div>
    </form>
  )
}

export default BoardForm
