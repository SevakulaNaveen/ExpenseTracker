const ExpenseList = ({ expenses, removeExpense }) => {
    return <div>
        <h2 style={{ textAlign: "center", textDecoration: "underline", marginBottom: "10px" }}>Expenses</h2>
        <table className="expenseTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense, index) => (
                    <tr key={index}>
                        <td>{expense.name}</td>
                        <td>{expense.amount}</td>
                        <td>
                            <button onClick={() => removeExpense(index)} className="removeButton">Remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default ExpenseList;
