import { withRouter } from 'next/router'

const Board = ({ router }) => {
  return (
    <div>
      <h1>Board {router.query.boardId}</h1>
    </div>
  )
}

export default withRouter(Board)
