import { useState } from "react";

const TotalBudget = ({ setTotalBudget, totalBudget }) => {

    const [budget, setBudget] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        setTotalBudget(parseInt(budget))
        setBudget(0)

    }

    return <div className="container" >
        <form onSubmit={handleSubmit}>
            <label>
                Total Budget:
                <input type="number"
                    value={budget}
                    onChange={(e) => (setBudget(e.target.value))}
                    className="budgetInput"

                />
            </label>
            <button type="submit" className="budgetButton">Set Budget</button>
        </form>
        {totalBudget > 0 ? (<div className="budget-info">Total Budget: ₹{totalBudget}</div>) : null}
    </div>
}

export default TotalBudget;