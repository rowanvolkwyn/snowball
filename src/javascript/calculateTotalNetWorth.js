import { calculateRepayment } from "./calculateRepayment";

export function calculateTotalNetWorth () {

    // Read all values from page
    let loanAmount = document.getElementById('loan-amount').value;
    let loanTerm = document.getElementById('loan-term').value;
    let interestRate = document.getElementById('interest-rate').value / 100;
    let startingAmount = document.getElementById('starting-amount').value;
    let growthRate = document.getElementById('investment-growth-rate').value;
    let totalInvestable = document.getElementById('amount-available').value;
    let repaymentFrequency = document.getElementById('repayment-frequency').value;
    let investedPercentage = document.getElementById('invest-percentage').value / 20;

    if (repaymentFrequency == 'weekly') {
        // Declare all variables to be returned
        let periods = 52;
        let minRepayment = calculateRepayment();
        let extraRepayment = Math.round((totalInvestable - minRepayment) * (1 - investedPercentage));
        let totalPayment = Number(minRepayment) + Number(extraRepayment);
        let investing = totalInvestable - minRepayment - extraRepayment;
        let effectiveInterestRate = interestRate / periods;
        // console.log(`TOTAL: ${totalPayment}`);
        // console.log(`LOAN: ${loanAmount}`);
        // console.log(`EIR: ${effectiveInterestRate}`);
        let numerator = Math.log(((totalPayment) / (totalPayment - (loanAmount * effectiveInterestRate))));
        let denominator = Math.log(1 + effectiveInterestRate);
        // console.log(`NUMERATOR: ${numerator}`);
        // console.log(`DENOMINATOR: ${denominator}`);
        let years = Math.floor((numerator/denominator) / periods);
        let weeks = Math.round((numerator/denominator) % periods);
        // console.log(`YEARS: ${years}`);
        // console.log(`WEEKS: ${weeks}`);
        // Convert 52 weeks into 1 year
        if (weeks == 52) {
            weeks = 0;
            years = years + 1;
        }
        // console.log(`YEARS: ${years}`);
        // console.log(`WEEKS: ${weeks}`);
        let mortgageWeeks = (years * periods) + weeks;
        let extraWeeks = (loanTerm * periods) - mortgageWeeks;

        // Calculate initialTotal + contributionTotal
        let annualInvestment = investing * periods;
        const initialTotal = startingAmount * Math.pow(1 + (growthRate / 100), loanTerm);
        let contributionTotal = annualInvestment * ((Math.pow(1 + (growthRate / 100), mortgageWeeks / periods) - 1) / (growthRate / 100));

        // Calculate contributionTotal + extraContributionTotal
        contributionTotal = contributionTotal * Math.pow(1 + (growthRate / 100), extraWeeks / periods);
        annualInvestment = (totalInvestable) * periods;
        let extraContributionTotal = annualInvestment * ((Math.pow(1 + (growthRate / 100), extraWeeks / periods) - 1) / (growthRate / 100));
        let totalNetWorth = Math.round(initialTotal + contributionTotal + extraContributionTotal);    
         // Return all variables in an object
        return {
            totalInvestable: totalInvestable,
            minRepayment: minRepayment,
            extraRepayment: extraRepayment,
            investing: investing,
            timeToPayoff: [years, weeks],
            totalNetWorth: totalNetWorth
        }

    } else if (repaymentFrequency == 'fortnightly') {
        // Declare all variables to be returned
        let periods = 26;
        let minRepayment = calculateRepayment();
        let extraRepayment = Math.round((totalInvestable - minRepayment) * (1 - investedPercentage));
        let totalPayment = Number(minRepayment) + Number(extraRepayment);
        let investing = totalInvestable - minRepayment - extraRepayment;
        let effectiveInterestRate = interestRate / periods;
        // console.log(`TOTAL: ${totalPayment}`);
        // console.log(`LOAN: ${loanAmount}`);
        // console.log(`EIR: ${effectiveInterestRate}`);
        let numerator = Math.log(((totalPayment) / (totalPayment - (loanAmount * effectiveInterestRate))));
        let denominator = Math.log(1 + effectiveInterestRate);
        // console.log(`NUMERATOR: ${numerator}`);
        // console.log(`DENOMINATOR: ${denominator}`);
        let years = Math.floor((numerator/denominator) / periods);
        let weeks = Math.round((numerator/denominator) % periods);
        // console.log(`YEARS: ${years}`);
        // console.log(`WEEKS: ${weeks}`);
        // Convert 52 weeks into 1 year
        if (weeks == 52) {
            weeks = 0;
            years = years + 1;
        }
        // console.log(`YEARS: ${years}`);
        // console.log(`WEEKS: ${weeks}`);
        let mortgageWeeks = (years * periods) + weeks;
        let extraWeeks = (loanTerm * periods) - mortgageWeeks;

        // Calculate initialTotal + contributionTotal
        let annualInvestment = investing * periods;
        const initialTotal = startingAmount * Math.pow(1 + (growthRate / 100), loanTerm);
        let contributionTotal = annualInvestment * ((Math.pow(1 + (growthRate / 100), mortgageWeeks / periods) - 1) / (growthRate / 100));

        // Calculate contributionTotal + extraContributionTotal
        contributionTotal = contributionTotal * Math.pow(1 + (growthRate / 100), extraWeeks / periods);
        annualInvestment = (totalInvestable) * periods;
        let extraContributionTotal = annualInvestment * ((Math.pow(1 + (growthRate / 100), extraWeeks / periods) - 1) / (growthRate / 100));
        let totalNetWorth = Math.round(initialTotal + contributionTotal + extraContributionTotal);
         // Return all variables in an object
        return {
            totalInvestable: totalInvestable,
            minRepayment: minRepayment,
            extraRepayment: extraRepayment,
            investing: investing,
            timeToPayoff: [years, weeks],
            totalNetWorth: totalNetWorth
        }
        
    } else if (repaymentFrequency == 'monthly') {
        // Declare all variables to be returned
        let periods = 12;
        let minRepayment = calculateRepayment();
        let extraRepayment = Math.round((totalInvestable - minRepayment) * (1 - investedPercentage));
        let totalPayment = Number(minRepayment) + Number(extraRepayment);
        let investing = totalInvestable - minRepayment - extraRepayment;
        let effectiveInterestRate = interestRate / periods;
        // console.log(`TOTAL: ${totalPayment}`);
        // console.log(`LOAN: ${loanAmount}`);
        // console.log(`EIR: ${effectiveInterestRate}`);
        let numerator = Math.log(((totalPayment) / (totalPayment - (loanAmount * effectiveInterestRate))));
        let denominator = Math.log(1 + effectiveInterestRate);
        // console.log(`NUMERATOR: ${numerator}`);
        // console.log(`DENOMINATOR: ${denominator}`);
        let years = Math.floor((numerator/denominator) / periods);
        let weeks = Math.round((numerator/denominator) % periods);
        // console.log(`YEARS: ${years}`);
        // console.log(`WEEKS: ${weeks}`);
        // Convert 52 weeks into 1 year
        if (weeks == 52) {
            weeks = 0;
            years = years + 1;
        }
        // console.log(`YEARS: ${years}`);
        // console.log(`WEEKS: ${weeks}`);
        let mortgageWeeks = (years * periods) + weeks;
        let extraWeeks = (loanTerm * periods) - mortgageWeeks;

        // Calculate initialTotal + contributionTotal
        let annualInvestment = investing * periods;
        const initialTotal = startingAmount * Math.pow(1 + (growthRate / 100), loanTerm);
        let contributionTotal = annualInvestment * ((Math.pow(1 + (growthRate / 100), mortgageWeeks / periods) - 1) / (growthRate / 100));

        // Calculate contributionTotal + extraContributionTotal
        contributionTotal = contributionTotal * Math.pow(1 + (growthRate / 100), extraWeeks / periods);
        annualInvestment = (totalInvestable) * periods;
        let extraContributionTotal = annualInvestment * ((Math.pow(1 + (growthRate / 100), extraWeeks / periods) - 1) / (growthRate / 100));
        let totalNetWorth = Math.round(initialTotal + contributionTotal + extraContributionTotal);

         // Return all variables in an object
        return {
            totalInvestable: totalInvestable,
            minRepayment: minRepayment,
            extraRepayment: extraRepayment,
            investing: investing,
            timeToPayoff: [years, weeks],
            totalNetWorth: totalNetWorth
        }
    }
}