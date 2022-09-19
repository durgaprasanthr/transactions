// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {historyList} = props
  let incomeAmount = 0
  let expensesAmount = 0

  historyList.forEach(element => {
    if (element.type === 'INCOME') {
      incomeAmount += element.amount
    } else {
      expensesAmount += element.amount
    }
  })

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          className="card-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="card-text-container">
          <p className="card-name">Your Balance</p>
          <p className="card-amount">Rs {incomeAmount - expensesAmount}</p>
        </div>
      </div>
      <div className="income-container">
        <img
          className="card-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="card-text-container">
          <p className="card-name">Your Income</p>
          <p className="card-amount">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          className="card-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="card-text-container">
          <p className="card-name">Your Expenses</p>
          <p className="card-amount">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
