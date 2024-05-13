import { calculateExtraRepayments } from "../javascript/calculateExtraRepayments";

function Complex() {
    return (
        <div id='complex'>
            <h1>Extra Repayment Calculator</h1>
            <form id="calculator-form">
                <label htmlFor="loan-amount">Loan Amount:</label>
                <input type="number" id="loan-amount" name="loan-amount" required />
                <label htmlFor="loan-term">Loan Term (years):</label>
                <input type="number" id="loan-term" name="loan-term" max='50' required />
                <label htmlFor="interest-rate">Interest Rate:</label>
                <input type="number" id="interest-rate" name="interest-rate" max='20' required />
                <label htmlFor="extra-payment">Extra Payments:</label>
                <input type="number" id="extra-payment" name="iextra-payment" max='20' required />
                <label htmlFor="repayment-frequency">Repayment Frequency:</label>
                <select id="repayment-frequency" name="repayment-frequency" onChange={calculateExtraRepayments} required >
                    <option value="weekly">Weekly</option>
                    <option value="fortnightly">Fortnightly</option>
                    <option value="monthly">Monthly</option>
                </select>
                <button type="button" onClick={calculateExtraRepayments}>Calculate</button>
            </form>
            <div id="results">
                <h2 id="amount"></h2>
            </div>
        </div>
    );
}

export default Complex;