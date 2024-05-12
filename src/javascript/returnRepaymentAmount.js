export function returnRepaymentAmount(loanAmount, loanTerm, interestRate, repaymentFrequency, divId) {
    // loanAmount = principal
    // loanTerm = length of loan
    // interestRate = interest rate
    // repaymentFrequency

    let calculatedRepayment;
    let effectiveInterestRate;
    let numRepayments;

    const target = document.getElementById(divId);

    if (repaymentFrequency == 'weekly') {
        effectiveInterestRate = interestRate / 5200;
        numRepayments = loanTerm * 52;
        calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                        (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
        target.innerHTML = `Repayment: $${calculatedRepayment} per week`;
    } else if (repaymentFrequency == 'fortnightly') {
        effectiveInterestRate = interestRate / 2600;
        numRepayments = loanTerm * 26;
        calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                        (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
        target.innerHTML = `Repayment: $${calculatedRepayment} per fortnight`;
    } else if (repaymentFrequency == 'monthly') {
        effectiveInterestRate = interestRate / 1200;
        numRepayments = loanTerm * 12;
        calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                        (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
        target.innerHTML = `Repayment: $${calculatedRepayment} per month`;
    } else {
        target.innerHTML = 'Please choose a valid repayment frequency.';
    };
    console.log(calculatedRepayment);
    return calculatedRepayment;
};
