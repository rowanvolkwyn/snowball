export function calculateTotalNetWorth() {

    const loanAmount = document.getElementById('loan-amount').value;
    const loanTerm = document.getElementById('loan-term').value;
    const interestRate = document.getElementById('interest-rate').value;
    const repaymentFrequency = document.getElementById('repayment-frequency').value;
    const availableToInvest = document.getElementById('amount-available').value;
    const investedPercentage = document.getElementById('invest-percentage').value;
    const startingAmount = document.getElementById('starting-amount').value;
    const investmentGrowthRate = document.getElementById('investment-growth-rate').value;

    let calculatedRepayment;
    let effectiveInterestRate;
    let numRepayments;

    const amount = document.getElementById('amount');

    if (repaymentFrequency == 'weekly') {
        // Calculate mortgageWeeks and extraWeeks

        effectiveInterestRate = interestRate / 5200;
        numRepayments = loanTerm * 52;
        calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                        (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
        const investable = availableToInvest - calculatedRepayment;
        const regularDeposit = investable * (investedPercentage / 20);                                                
        const extraPayment = availableToInvest - calculatedRepayment;                                                
        const totalPayment = Number(calculatedRepayment) + Number(extraPayment);
        const numerator = Math.log(((totalPayment) / (totalPayment - (loanAmount * effectiveInterestRate))))
        const denominator = Math.log(1 + effectiveInterestRate);
        const years = Math.floor((numerator/denominator) / 52);
        const weeks = Math.round((numerator/denominator) % 52);
        const mortgageWeeks = (years * 52) + weeks;
        const extraWeeks = (loanTerm * 52) - mortgageWeeks;

        // Calculate initialTotal + contributionTotal
        let annualInvestment = regularDeposit * 52;
        const initialTotal = startingAmount * Math.pow(1 + (investmentGrowthRate / 100), loanTerm);
        let contributionTotal = annualInvestment * ((Math.pow(1 + (investmentGrowthRate / 100), mortgageWeeks / 52) - 1) / (investmentGrowthRate / 100));
        console.log(`Initial total: ${initialTotal}`);
        console.log(`Contribution first total: ${contributionTotal}`);
        // Calculate contributionTotal + extraContributionTotal
        contributionTotal = contributionTotal * Math.pow(1 + (investmentGrowthRate / 100), extraWeeks / 52);
        console.log(`Contribution second total: ${contributionTotal}`);
        annualInvestment = (regularDeposit + calculatedRepayment) * 52;
        const extraContributionTotal = annualInvestment * ((Math.pow(1 + (investmentGrowthRate / 100), extraWeeks / 52) - 1) / (investmentGrowthRate / 100));
        const netWorth = initialTotal + contributionTotal + extraContributionTotal;
        console.log(`Extra contribution total: ${extraContributionTotal}`);
        console.log(`Total Nest Egg: ${netWorth}`);
        


        
        const totalInvested = initialTotal + contributionTotal;

        console.log(`Min repayment: ${calculatedRepayment}`);
        console.log(`Total available: ${availableToInvest}`);
        console.log(`Investable: ${investable}`);
        console.log(`Percentage: ${investedPercentage * 5}`);
        console.log(`Regular Deposit: ${regularDeposit}`);
        console.log(`Annual Investment: ${annualInvestment}`);
        


        amount.innerHTML = `Your minimum repayment is $${calculatedRepayment} per week. </br>
                            You have $${investable} left to invest each week. </br>
                            If you invest ${investedPercentage * 5}% of that, you'll invest 
                            $${investable * (investedPercentage / 20)} per week until you pay off your mortgage. </br>
                            Once the mortgage is paid off, you'll invest an extra $${calculatedRepayment} a week. </br>
                            After ${loanTerm} years, you will have a Net Worth of $${Math.round(netWorth)}.`;



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
