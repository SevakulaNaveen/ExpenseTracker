import { useState } from "react";


const ExpenseInput = ({ addExpense, totalBudget }) => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (totalBudget <= 0) {
            alert("you cant add expenses when your budget is zero")
            return;
        }
        if (!name || amount <= 0) {
            alert("please enter a valid expense and amount!!!")
        }

        addExpense({ name, amount: parseInt(amount) })
        setName('')
        setAmount(0)
    }


    return <div className="expenseContainer">
        <form onSubmit={handleSubmit}>
            <div className="inputgroup">
                <label>
                    Expense Name:
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />

                </label>
                <label className="label2">
                    Amount:
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} />
                </label>
            </div>
            <button type="submit" className="expenseButton">Add Expense</button>
        </form>
    </div>
}

export default ExpenseInput;