import { useState } from "react"
import BalanceBudget from "./components/BalanceBudget"
import ExpenseInput from "./components/ExpenseInput"
import ExpenseList from "./components/ExpenseList"
import TotalBudget from "./components/TotalBudget"
import './styles.css'
const BudgetTracker = () => {
    //using useState hook to declare a totalBudget state varibale and function to update statevaribale
    const [totalBudget, setTotalBudget] = useState(0)
    //using usestate hook to declare expenses state varibale and defalut value of it is empty array which keeps track of all expenses
    const [expenses, setExpenses] = useState([])


    //function to add new exxpenses into our expenses array
    const addExpense = (expense) => {
        setExpenses([...expenses, expense])
    }

    //function to remove expense from expenses array
    const removeExpense = (index) => {
        const updatedExpenses = [...expenses]
        updatedExpenses.splice(index, 1)
        setExpenses(updatedExpenses)
    }

    //function that calculates balance amount from totalBudget when any expense is added
    const calBalance = () => {
        const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0)
        return totalBudget - totalExpense;
    }
    console.log(expenses);
    return <div className="main">
        <h1 className="heading">Effortlessly Track Your Expenses: An Intuitive Expense Management App</h1>
        <TotalBudget setTotalBudget={setTotalBudget} totalBudget={totalBudget} />
        <BalanceBudget calBalance={calBalance} totalBudget={totalBudget} />
        <ExpenseInput addExpense={addExpense} totalBudget={totalBudget} />
        <ExpenseList expenses={expenses} removeExpense={removeExpense} />
    </div>
}

export default BudgetTracker