// Write your code here
import './index.css'

const TransactionItem = props => {
  const {history, deleteHistory} = props
  const {id, title, amount, type} = history
  const onClickDeleteButton = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-log-container">
      <p className="history-log-item">{title}</p>
      <p className="history-log-item">Rs {amount}</p>
      <p className="history-log-item">{type}</p>
      <button
        className="history-delete-button"
        type="button"
        onClick={onClickDeleteButton}
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
