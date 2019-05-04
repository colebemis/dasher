import React from 'react'
import theme from '../theme'
import ExternalLink from './ExternalLink'
import FormGroup from './FormGroup'
import { ExternalLinkIcon } from './Icon'
import Input from './Input'
import Label from './Label'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

interface CreateColumnFormValues {
  name: string
  query: string
}

interface CreateColumnFormProps {
  onSubmit: (values: CreateColumnFormValues) => void
  onCancel: () => void
}

const CreateColumnForm: React.FC<CreateColumnFormProps> = ({
  onSubmit,
  onCancel,
}) => {
  const [values, setValues] = React.useState<CreateColumnFormValues>({
    name: '',
    query: '',
  })

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    onSubmit(values)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      css={{
        display: 'grid',
        gridGap: theme.space[4],
        padding: theme.space[4],
        backgroundColor: theme.colors.white,
        borderRadius: theme.radii[2],
        boxShadow: theme.shadows.small,
      }}
    >
      <FormGroup>
        <Label htmlFor="create-column-name">Column name</Label>
        <Input
          id="create-column-name"
          type="text"
          autoFocus={true}
          value={values.name}
          onChange={event =>
            setValues({ ...values, name: event.currentTarget.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="create-column-query">GitHub query</Label>
        <Input
          as="textarea"
          id="create-column-query"
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
          css={{ resize: 'vertical' }}
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
          display: 'grid',
          gridTemplateColumns: `1fr 1fr`,
          gridGap: theme.space[3],
        }}
      >
        <SecondaryButton type="button" onClick={() => onCancel()}>
          Cancel
        </SecondaryButton>
        <PrimaryButton>Create column</PrimaryButton>
      </div>
    </form>
  )
}

export default CreateColumnForm
