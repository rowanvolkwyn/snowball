//const form = document.getElementById('calculator-form');
function calculateRepayment() {
    const loanAmount = document.getElementById('loan-amount').value;
    const loanTerm = document.getElementById('loan-term').value;
    const interestRate = document.getElementById('interest-rate').value;
    const repaymentFrequency = document.getElementById('repayment-frequency').value;

    let calculatedRepayment;
    let effectiveInterestRate;
    let numRepayments;

    const amount = document.getElementById('amount');

    if (repaymentFrequency == 'weekly') {
        effectiveInterestRate = interestRate / 5200;
        numRepayments = loanTerm * 52;
        calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                        (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
        amount.innerHTML = `For a loan of $${loanAmount}, over ${loanTerm} years with a ${interestRate}% interest rate, 
        your payment will be $${calculatedRepayment} per week.`;
    } else if (repaymentFrequency == 'fortnightly') {
        effectiveInterestRate = interestRate / 2600;
        numRepayments = loanTerm * 26;
        calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                        (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
        amount.innerHTML = `For a loan of $${loanAmount}, over ${loanTerm} years with a ${interestRate}% interest rate, 
        your payment will be $${calculatedRepayment} per fortnight.`;
    } else if (repaymentFrequency == 'monthly') {
        effectiveInterestRate = interestRate / 1200;
        numRepayments = loanTerm * 12;
        calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                        (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
        amount.innerHTML = `For a loan of $${loanAmount}, over ${loanTerm} years with a ${interestRate}% interest rate, 
        your payment will be $${calculatedRepayment} per month.`;
    } else {
        amount.innerHTML = 'Please choose a valid repayment frequency.';
    };
}
