import { calculateInvestment } from "../javascript/calculateInvestment";

function Investment() {
    return (
        <div id='investment'>
            <h1>Compound Interest Calculator</h1>
            <form id="calculator-form">
                <label htmlFor="starting-amount">Starting Amount:</label>
                <input type="number" id="starting-amount" name="starting-amount" required />
                <label htmlFor="regular-deposit">Regular Deposit:</label>
                <input type="number" id="regular-deposit" name="regular-deposit" required />
                <label htmlFor="deposit-frequency">Deposit Frequency:</label>
                <select id="deposit-frequency" name="deposit-frequency" required >
                    <option value="weekly">Weekly</option>
                    <option value="fortnightly">Fortnightly</option>
                    <option value="monthly">Monthly</option>
                </select>
                <label htmlFor="investment-term">Investment Term (years):</label>
                <input type="number" id="investment-term" name="investment-term" max='50' required />
                <label htmlFor="growth-rate">Expected Growth Rate:</label>
                <input type="number" id="growth-rate" name="growth-rate" max='100' required />
                <button type="button" onClick={calculateInvestment}>Calculate</button>
            </form>
            <div id="results">
                <h2 id="amount"></h2>
            </div>
        </div>
    );
}

export default Investment;