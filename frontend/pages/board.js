import { withRouter } from 'next/router'

const Board = ({ router }) => {
  return (
    <div>
      <h1>Board {router.query.id}</h1>
    </div>
  )
}

export default withRouter(Board)
