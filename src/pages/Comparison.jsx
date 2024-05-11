import { calculateTotalNetWorth } from "../javascript/calculateTotalNetWorth";
import { updatePercentage } from "../javascript/functions";

function Comparison() {

    return (
        <div id='comparison'>
            <h1>Invest vs Payoff Calculator</h1>
            <div id='comparison-container'>
                <form id="comparison-form">
                    <h2>Mortgage</h2>
                    <label htmlFor="loan-amount">Loan Amount:</label>
                    <input type="number" id="loan-amount" name="loan-amount" required />
                    <label htmlFor="loan-term">Loan Term (years):</label>
                    <input type="number" id="loan-term" name="loan-term" max='50' required />
                    <label htmlFor="interest-rate">Interest Rate:</label>
                    <input type="number" id="interest-rate" name="interest-rate" max='20' required />
                    <label htmlFor="house-growth-rate">Expected Growth Rate:</label>
                    <input type="number" id="house-growth-rate" name="house-growth-rate" max='100' required />
                </form>
                <form id="comparison-form">
                    <h2>Investment</h2>
                    <label htmlFor="starting-amount">Starting Amount:</label>
                    <input type="number" id="starting-amount" name="starting-amount" required />
                    <label htmlFor="regular-deposit">Regular Deposit:</label>
                    <input type="number" id="regular-deposit" name="regular-deposit" required />
                    <label htmlFor="investment-term">Investment Term (years):</label>
                    <input type="number" id="investment-term" name="investment-term" max='50' required />
                    <label htmlFor="investment-growth-rate">Expected Growth Rate:</label>
                    <input type="number" id="investment-growth-rate" name="investment-growth-rate" max='100' required />
                </form>
            </div>
            <div id="results">
                <form id="calculate">
                    <label htmlFor="amount-available">Total Amount Available:</label>
                    <input type="number" id="amount-available" name="amount-available" required />
                    <label htmlFor="repayment-frequency">Repayment Frequency:</label>
                    <select id="repayment-frequency" name="repayment-frequency" required >
                        <option value="weekly">Weekly</option>
                        <option value="fortnightly">Fortnightly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                    <label htmlFor="invest-percentage">Percentage to Invest:</label>
                    <input type="range" id="invest-percentage" name="invest-percentage" min="0" max="20" onInput={updatePercentage} required />
                    <button type="button" onClick={calculateTotalNetWorth}>Calculate</button>
                </form>
                <h2 id="amount"></h2>
            </div>
            <div id="calculated-amounts">
                <p>Amount investing</p>
                <p id='investing'></p>
                <p>Amount paying off</p>
                <p id='repaying'></p>
            </div>
        </div>
    );
}

export default Comparison;