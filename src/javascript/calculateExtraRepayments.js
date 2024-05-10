export function calculateExtraRepayments() {
    const loanAmount = document.getElementById('loan-amount').value;
    const loanTerm = document.getElementById('loan-term').value;
    const interestRate = document.getElementById('interest-rate').value;
    const repaymentFrequency = document.getElementById('repayment-frequency').value;
    const extraPayment = document.getElementById('extra-payment').value;

    let calculatedRepayment;
    let effectiveInterestRate;
    let numRepayments;

    let numRepaymentsExtra;
    let monthlyPayment;

    const amount = document.getElementById('amount');

    if (repaymentFrequency == 'weekly') {
        // Original Repayment
        effectiveInterestRate = interestRate / 5200;
        numRepayments = loanTerm * 52;
        calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                        (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
        amount.innerHTML = `Repayment: $${calculatedRepayment} per week`;


        // Extra Repayments
        const totalPayment = Number(calculatedRepayment) + Number(extraPayment);

        const numerator = Math.log(((totalPayment) / (loanAmount * effectiveInterestRate)) + 1)
        const denominator = Math.log(1 + effectiveInterestRate);
        console.log(calculatedRepayment);
        console.log(extraPayment);
        console.log(totalPayment);
        console.log(effectiveInterestRate);
        console.log(`numerator: ${numerator}`);
        console.log(`denominator: ${denominator}`);
        console.log(`weeks: ${numerator/denominator}`);



    } else if (repaymentFrequency == 'fortnightly') {
        effectiveInterestRate = interestRate / 2600;
        numRepayments = loanTerm * 26;
        calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                        (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
        amount.innerHTML = `Repayment: $${calculatedRepayment} per fortnight`;
    } else if (repaymentFrequency == 'monthly') {
        effectiveInterestRate = interestRate / 1200;
        numRepayments = loanTerm * 12;
        calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                        (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
        amount.innerHTML = `Repayment: $${calculatedRepayment} per month`;
    } else {
        amount.innerHTML = 'Please choose a valid repayment frequency.';
    };
};
