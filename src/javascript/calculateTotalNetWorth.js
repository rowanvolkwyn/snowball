export function calculateTotalNetWorth() {

    const loanAmount = document.getElementById('loan-amount').value;
    const loanTerm = document.getElementById('loan-term').value;
    const interestRate = document.getElementById('interest-rate').value;
    const repaymentFrequency = document.getElementById('repayment-frequency').value;
    const availableToInvest = document.getElementById('amount-available').value;
    let investedPercentage = document.getElementById('invest-percentage').value;
    const startingAmount = document.getElementById('starting-amount').value;
    const investmentTerm = document.getElementById('investment-term').value;
    const investmentGrowthRate = document.getElementById('investment-growth-rate').value;
    const initialTotal = startingAmount * Math.pow(1 + (investmentGrowthRate / 100), investmentTerm);

    let calculatedRepayment;
    let effectiveInterestRate;
    let numRepayments;

    const amount = document.getElementById('amount');

    if (repaymentFrequency == 'weekly') {
        effectiveInterestRate = interestRate / 5200;
        numRepayments = loanTerm * 52;
        calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                        (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
        

        const investable = availableToInvest - calculatedRepayment;
        const regularDeposit = investable * (investedPercentage / 20);

        const annualInvestment = regularDeposit * 52;
        const contributionTotal = annualInvestment * ((Math.pow(1 + (investmentGrowthRate / 100), loanTerm) - 1) / (1 + (investmentGrowthRate / 100)));
        const totalInvested = initialTotal + contributionTotal;

        console.log(`Min repayment: ${calculatedRepayment}`);
        console.log(`Total available: ${availableToInvest}`);
        console.log(`Investable: ${investable}`);
        console.log(`Percentage: ${investedPercentage}`);
        console.log(`Regular Deposit: ${regularDeposit}`);
        console.log(`Annual Investment: ${annualInvestment}`);
        console.log(`Initial total: ${initialTotal}`);
        console.log(`Contribution total: ${contributionTotal}`);

        amount.innerHTML = `Your minimum repayment is $${calculatedRepayment} per week. </br>
                            You have $${investable} left to invest each week. </br>
                            If you invest ${investedPercentage * 5}% of that, you'll invest 
                            $${investable * (investedPercentage / 20)} per week. </br>
                            That will amount to $${Math.round(totalInvested)} after 30 years.`;



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
    console.log(calculatedRepayment);
    return calculateTotalNetWorth;
};
