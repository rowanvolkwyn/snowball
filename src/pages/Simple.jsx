import { calculateRepayment } from "../javascript/calculateRepayment";

function Simple() {

    return (
        <div id='simple'>
            <h1 id="answer">Snowball</h1>
            <form id="calculator-form">
                <label htmlFor="loan-amount">Loan Amount:</label>
                <input type="number" id="loan-amount" name="loan-amount" required />
                <label htmlFor="loan-term">Loan Term (years):</label>
                <input type="number" id="loan-term" name="loan-term" max='50' required />
                <label htmlFor="interest-rate">Interest Rate:</label>
                <input type="number" id="interest-rate" name="interest-rate" max='20' required />
                <label htmlFor="repayment-frequency">Repayment Frequency:</label>
                <select id="repayment-frequency" name="repayment-frequency" required >
                    <option value="weekly">Weekly</option>
                    <option value="fortnightly">Fortnightly</option>
                    <option value="monthly">Monthly</option>
                </select>
                <button type="button" onClick={calculateRepayment}>Calculate</button>
            </form>
            <div id="results">
                <h2 id="amount">Amount</h2>
            </div>
        </div>
    );
}

export default Simple;