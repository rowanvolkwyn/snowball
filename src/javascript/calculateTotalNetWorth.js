export function calculateTotalNetWorth() {

    const loanAmount = document.getElementById('loan-amount').value;
    const loanTerm = document.getElementById('loan-term').value;
    const interestRate = document.getElementById('interest-rate').value;
    const repaymentFrequency = document.getElementById('repayment-frequency').value;
    let availableToInvest = document.getElementById('amount-available').value;
    let investedPercentage = document.getElementById('invest-percentage').value;
    const startingAmount = document.getElementById('starting-amount').value;
    const investmentGrowthRate = document.getElementById('investment-growth-rate').value;

    let calculatedRepayment;
    let effectiveInterestRate;
    let numRepayments;
    let periods;

    const amount = document.getElementById('amount');

    if (repaymentFrequency == 'weekly') {
        // Calculate mortgageWeeks and extraWeeks
        periods = 52;

        effectiveInterestRate = interestRate / (periods * 100);
        numRepayments = loanTerm * periods;
        calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                        (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
        const investable = availableToInvest - calculatedRepayment;
        const regularDeposit = investable * (investedPercentage / 20);                                                
        const extraPayment = availableToInvest - calculatedRepayment;                                                
        const totalPayment = Number(calculatedRepayment) + Number(extraPayment);
        const numerator = Math.log(((totalPayment) / (totalPayment - (loanAmount * effectiveInterestRate))))
        const denominator = Math.log(1 + effectiveInterestRate);
        const years = Math.floor((numerator/denominator) / periods);
        const weeks = Math.round((numerator/denominator) % periods);
        const mortgageWeeks = (years * periods) + weeks;
        const extraWeeks = (loanTerm * periods) - mortgageWeeks;
        availableToInvest = document.getElementById('amount-available').value;
        investedPercentage = document.getElementById('invest-percentage').value;

        if (investable > 0) {

            // Calculate initialTotal + contributionTotal
            let annualInvestment = regularDeposit * periods;
            const initialTotal = startingAmount * Math.pow(1 + (investmentGrowthRate / 100), loanTerm);
            let contributionTotal = annualInvestment * ((Math.pow(1 + (investmentGrowthRate / 100), mortgageWeeks / periods) - 1) / (investmentGrowthRate / 100));

            // Calculate contributionTotal + extraContributionTotal
            contributionTotal = contributionTotal * Math.pow(1 + (investmentGrowthRate / 100), extraWeeks / periods);
            annualInvestment = (regularDeposit + calculatedRepayment) * periods;
            const extraContributionTotal = annualInvestment * ((Math.pow(1 + (investmentGrowthRate / 100), extraWeeks / periods) - 1) / (investmentGrowthRate / 100));
            const netWorth = initialTotal + contributionTotal + extraContributionTotal;

            document.getElementById('repayment').innerHTML = `Mortgage Repayment: $${calculatedRepayment}`;
            document.getElementById('extra-repayment').innerHTML = `Extra Repayment: $${investable - Math.round(investable * (investedPercentage / 20))}`;
            document.getElementById('time-to-payoff').innerHTML = `Time to Payoff: ${years} years and ${weeks} weeks`;
            document.getElementById('regular-investment').innerHTML = `Weekly Investing: $${Math.round(investable * (investedPercentage / 20))}`;
            document.getElementById('extra-investment').innerHTML = `Weekly Investing after Mortgage: $${Math.round(investable * (investedPercentage / 20))}`;
            document.getElementById('net-worth').innerHTML = `Net Worth: $${Math.round(netWorth)}`;

        } 

    } else if (repaymentFrequency == 'fortnightly') {
        // Calculate mortgageWeeks and extraWeeks
        periods = 26;

        effectiveInterestRate = interestRate / (periods * 100);
        numRepayments = loanTerm * periods;
        calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                        (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
        const investable = availableToInvest - calculatedRepayment;
        const regularDeposit = investable * (investedPercentage / 20);                                                
        const extraPayment = availableToInvest - calculatedRepayment;                                                
        const totalPayment = Number(calculatedRepayment) + Number(extraPayment);
        const numerator = Math.log(((totalPayment) / (totalPayment - (loanAmount * effectiveInterestRate))))
        const denominator = Math.log(1 + effectiveInterestRate);
        const years = Math.floor((numerator/denominator) / periods);
        const weeks = Math.round((numerator/denominator) % periods);
        const mortgageWeeks = (years * periods) + weeks;
        const extraWeeks = (loanTerm * periods) - mortgageWeeks;

        if (investable > calculatedRepayment) {

            // Calculate initialTotal + contributionTotal
            let annualInvestment = regularDeposit * periods;
            const initialTotal = startingAmount * Math.pow(1 + (investmentGrowthRate / 100), loanTerm);
            let contributionTotal = annualInvestment * ((Math.pow(1 + (investmentGrowthRate / 100), mortgageWeeks / periods) - 1) / (investmentGrowthRate / 100));

            // Calculate contributionTotal + extraContributionTotal
            contributionTotal = contributionTotal * Math.pow(1 + (investmentGrowthRate / 100), extraWeeks / periods);
            annualInvestment = (regularDeposit + calculatedRepayment) * periods;
            const extraContributionTotal = annualInvestment * ((Math.pow(1 + (investmentGrowthRate / 100), extraWeeks / periods) - 1) / (investmentGrowthRate / 100));
            const netWorth = initialTotal + contributionTotal + extraContributionTotal;

            amount.innerHTML = `Your minimum repayment is $${calculatedRepayment} per fortnight. </br>
                                You have $${investable} left to invest each week. </br>
                                If you invest ${investedPercentage * 5}% of that, you'll invest 
                                $${Math.round(investable * (investedPercentage / 20))} per fortnight until you pay off your mortgage. </br>
                                Once the mortgage is paid off, you'll invest an extra $${Math.round(calculatedRepayment)} a fortnight. </br>
                                After ${loanTerm} years, you will have a Net Worth of $${Math.round(netWorth)}.`;
        } else {
            amount.innerHTML = 'Your minimum repayment is greater than what you can afford';
        }

    } else if (repaymentFrequency == 'monthly') {
        // Calculate mortgageWeeks and extraWeeks
        periods = 12;

        effectiveInterestRate = interestRate / (periods * 100);
        numRepayments = loanTerm * periods;
        calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                        (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
        const investable = availableToInvest - calculatedRepayment;
        const regularDeposit = investable * (investedPercentage / 20);                                                
        const extraPayment = availableToInvest - calculatedRepayment;                                                
        const totalPayment = Number(calculatedRepayment) + Number(extraPayment);
        const numerator = Math.log(((totalPayment) / (totalPayment - (loanAmount * effectiveInterestRate))))
        const denominator = Math.log(1 + effectiveInterestRate);
        const years = Math.floor((numerator/denominator) / periods);
        const weeks = Math.round((numerator/denominator) % periods);
        const mortgageWeeks = (years * periods) + weeks;
        const extraWeeks = (loanTerm * periods) - mortgageWeeks;

        if (investable > calculatedRepayment) {

            // Calculate initialTotal + contributionTotal
            let annualInvestment = regularDeposit * periods;
            const initialTotal = startingAmount * Math.pow(1 + (investmentGrowthRate / 100), loanTerm);
            let contributionTotal = annualInvestment * ((Math.pow(1 + (investmentGrowthRate / 100), mortgageWeeks / periods) - 1) / (investmentGrowthRate / 100));

            // Calculate contributionTotal + extraContributionTotal
            contributionTotal = contributionTotal * Math.pow(1 + (investmentGrowthRate / 100), extraWeeks / periods);
            annualInvestment = (regularDeposit + calculatedRepayment) * periods;
            const extraContributionTotal = annualInvestment * ((Math.pow(1 + (investmentGrowthRate / 100), extraWeeks / periods) - 1) / (investmentGrowthRate / 100));
            const netWorth = initialTotal + contributionTotal + extraContributionTotal;

            amount.innerHTML = `Your minimum repayment is $${calculatedRepayment} per month. </br>
                                You have $${investable} left to invest each month. </br>
                                If you invest ${investedPercentage * 5}% of that, you'll invest 
                                $${Math.round(investable * (investedPercentage / 20))} per month until you pay off your mortgage. </br>
                                Once the mortgage is paid off, you'll invest an extra $${Math.round(calculatedRepayment)} a month. </br>
                                After ${loanTerm} years, you will have a Net Worth of $${Math.round(netWorth)}.`;
        } else {
            amount.innerHTML = 'Your minimum repayment is greater than what you can afford';
        }

    } else {
        amount.innerHTML = 'Please choose a valid repayment frequency.';
    };
    console.log(calculatedRepayment);
    return calculateTotalNetWorth;
};
