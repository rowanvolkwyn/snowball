import { calculateRepayment } from "../javascript/calculateRepayment";
import { calculateTotalNetWorth } from "../javascript/calculateTotalNetWorth";
import { updatePercentage } from "../javascript/updatePercentage";

function Comparison() {

    function handleChange() {
        updatePercentage();
        calculateTotalNetWorth();
    }

    return (
        <div id='comparison'>
            <h1>Invest vs Payoff Calculator</h1>
            <form id="calculator-form">
                <h2>Mortgage</h2>
                <label htmlFor="loan-amount">Loan Amount:</label>
                <input type="number" id="loan-amount" name="loan-amount" required />
                <label htmlFor="loan-term">Loan Term (years):</label>
                <input type="number" id="loan-term" name="loan-term" max='50' required />
                <label htmlFor="interest-rate">Interest Rate:</label>
                <input type="number" id="interest-rate" name="interest-rate" max='20' required />
                <h2>Investment</h2>
                <label htmlFor="starting-amount">Starting Amount:</label>
                <input type="number" id="starting-amount" name="starting-amount" required />
                <label htmlFor="investment-growth-rate">Expected Growth Rate:</label>
                <input type="number" id="investment-growth-rate" name="investment-growth-rate" max='100' required />
                <label htmlFor="amount-available">Available to invest:</label>
                <input type="number" id="amount-available" name="amount-available" onInput={updatePercentage} required />
                <label htmlFor="repayment-frequency">Repayment Frequency:</label>
                <select id="repayment-frequency" name="repayment-frequency" required >
                    <option value="weekly">Weekly</option>
                    <option value="fortnightly">Fortnightly</option>
                    <option value="monthly">Monthly</option>
                </select>
                <label htmlFor="invest-percentage">Percentage to Invest:</label>
                <input type="range" id="invest-percentage" name="invest-percentage" min="0" max="20" onInput={handleChange} required />
                <div id="calculated-amounts">
                    <div className="left">
                        <p>Loan</p>
                        <p id='repaying'></p>
                    </div>
                    <div className="right">
                        <p>Investing</p>
                        <p id='investing'></p>
                    </div>
                </div>
                <button type="button" onClick={calculateTotalNetWorth}>Calculate</button>
            </form>
            <div id='net-worth-results'>
                <div id='static'>
                    <p>Mortgage Repayment:</p>
                    <p>Extra Repayment:</p>
                    <p>Time to Payoff:</p>
                    <p>Weekly Investing:</p>
                    <p>Weekly Investing after Mortgage:</p>
                    <p><strong>Total Net Worth: </strong></p>
                </div>
                <div id='dynamic'>
                    <p id='repayment'></p>
                    <p id='extra-repayment'></p>
                    <p id='time-to-payoff'></p>
                    <p id='regular-investment'></p>
                    <p id='extra-investment'></p>
                    <p><strong id='net-worth'></strong></p>
                </div>
            </div>
            <h2 id="amount"></h2>
        </div>
    );
}

export default Comparison;