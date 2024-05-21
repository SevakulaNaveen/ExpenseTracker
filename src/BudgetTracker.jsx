import { useState } from "react"
import BalanceBudget from "./components/BalanceBudget"
import ExpenseInput from "./components/ExpenseInput"
import ExpenseList from "./components/ExpenseList"
import TotalBudget from "./components/TotalBudget"
import './styles.css'
const BudgetTracker = () => {
    const [totalBudget, setTotalBudget] = useState(0)
    const [expenses, setExpenses] = useState([])


    const addExpense = (expense) => {
        setExpenses([...expenses, expense])
    }

    const removeExpense = (index) => {
        const updatedExpenses = [...expenses]
        updatedExpenses.splice(index, 1)
        setExpenses(updatedExpenses)
    }

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