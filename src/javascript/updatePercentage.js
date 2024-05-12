import { calculateRepayment } from "./calculateRepayment";

export function updatePercentage() {
    let sliderPercentage = document.getElementById('invest-percentage').value / 20;
    const loanAmount = document.getElementById('loan-amount').value;
    const loanTerm = document.getElementById('loan-term').value;
    const interestRate = document.getElementById('interest-rate').value;
    const growthRate = document.getElementById('investment-growth-rate').value;
    const minRepayment = calculateRepayment();
    const repaymentFrequency = document.getElementById('repayment-frequency').value;
    let investable = document.getElementById('amount-available').value - minRepayment;
    const availableToInvest = document.getElementById('amount-available').value - minRepayment;
    const filledIn = (loanAmount && loanTerm && interestRate && growthRate && investable) ? true : false;
    let investing;
    let repaying;

    if (filledIn) {
        investable = document.getElementById('amount-available').value - minRepayment;
        sliderPercentage = document.getElementById('invest-percentage').value / 20;
        console.log(`investable: ${investable}`);
        investing = Math.round((investable * (sliderPercentage)));
        document.getElementById('investing').innerHTML = `$${investing}`;
        console.log(investing);
        repaying = investable - investing;
        document.getElementById('repaying').innerHTML = `$${repaying}`;
        console.log(`repaying: ${repaying}`);
        console.log(`filledIn: ${filledIn}`);
        console.log(`slider: ${sliderPercentage}`);
        console.log(`min: ${minRepayment}`);
        console.log(`available: ${availableToInvest}`);
    }
}