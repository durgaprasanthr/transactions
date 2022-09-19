import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    historyList: [],
    titleInput: '',
    amountInput: '',
    typeInput: 'INCOME',
  }

  onSubmitAddTransaction = () => {
    const {titleInput, amountInput, typeInput} = this.state
    const newHistory = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type: typeInput,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      titleInput: '',
      amountInput: '',
      typeInput: 'INCOME',
    }))
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTypeInput = event => {
    this.setState({typeInput: event.target.value})
  }

  deleteHistory = id => {
    this.setState(prevState => ({
      historyList: prevState.filter(history => history.id !== id),
    }))
  }

  render() {
    const {historyList, titleInput, amountInput} = this.state

    return (
      <div className="app-container">
        <div className="welcome-container">
          <h1 className="welcome-heading">Hi, Richard</h1>
          <p className="welcome-quote">
            Welcome back to your{' '}
            <span className="welcome-quote-highlight">Money Manager</span>
          </p>
        </div>
        <MoneyDetails historyList={historyList} />
        <div className="transactions-container">
          <form
            className="add-transaction-container"
            onSubmit={this.onSubmitAddTransaction}
          >
            <h1 className="add-transaction-heading">Add Transaction</h1>
            <label htmlFor="title" className="label">
              TITLE
            </label>
            <input
              id="title"
              className="input"
              type="text"
              placeholder="TITLE"
              value={titleInput}
              onChange={this.onChangeTitleInput}
            />
            <label htmlFor="amount" className="label">
              AMOUNT
            </label>
            <input
              id="amount"
              className="input"
              type="number"
              placeholder="AMOUNT"
              value={amountInput}
              onChange={this.onChangeAmountInput}
            />
            <label htmlFor="type" className="label">
              TYPE
            </label>
            <select
              id="type"
              className="input"
              onChange={this.onChangeTypeInput}
            >
              {transactionTypeOptions.map(transactionType => (
                <option
                  className="option"
                  key={transactionType.optionId}
                  value={transactionType.optionId}
                >
                  {transactionType.displayText}
                </option>
              ))}
            </select>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="add-transaction-heading">History</h1>
            <ul className="history-list-container">
              <li className="history-log-heading-container">
                <p className="history-log-heading">Title</p>
                <p className="history-log-heading">Amount</p>
                <p className="history-log-heading">Type</p>
              </li>
              {historyList.map(history => (
                <TransactionItem
                  history={history}
                  key={history.id}
                  deleteHistory={this.deleteHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
