const BalanceBudget = ({ calBalance, totalBudget }) => {
    if (totalBudget <= 0) {
        return
    }
    return <div className="balanceContainer">
        <div className="balance">Balance budget : ₹{calBalance()}</div>
    </div>
}

export default BalanceBudget;