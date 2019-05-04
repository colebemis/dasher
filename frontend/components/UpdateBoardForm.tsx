import React from 'react'
import theme from '../theme'
import ExternalLink from './ExternalLink'
import FormGroup from './FormGroup'
import { ExternalLinkIcon } from './Icon'
import Input from './Input'
import Label from './Label'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

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
        display: 'grid',
        gridGap: theme.space[4],
        width: '18rem',
        padding: `${theme.space[2]} ${theme.space[4]}`,
      }}
    >
      <FormGroup>
        <Label htmlFor="update-board-name">Board name</Label>
        <Input
          id="update-board-name"
          type="text"
          value={values.name}
          onChange={event =>
            onChange({ ...values, name: event.currentTarget.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="update-board-query">GitHub query</Label>
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
            css={{ marginRight: theme.space[2], color: theme.colors.gray[6] }}
          />
          View GitHub's query syntax
        </ExternalLink>
      </FormGroup>
      {isDirty ? (
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: `1fr 1fr`,
            gridGap: theme.space[3],
          }}
        >
          <SecondaryButton
            type="button"
            onClick={() => onReset()}
            css={{ flexGrow: 1 }}
          >
            Reset
          </SecondaryButton>
          <PrimaryButton css={{ flexGrow: 1 }}>Apply</PrimaryButton>
        </div>
      ) : null}
    </form>
  )
}

export default UpdateBoardForm
