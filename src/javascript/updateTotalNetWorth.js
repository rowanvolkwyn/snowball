import { calculateTotalNetWorth } from './calculateTotalNetWorth';

export function updateTotalNetWorth() {

    const netWorthInformation = calculateTotalNetWorth();
    const totalInvestable = netWorthInformation.totalInvestable;
    const minRepayment = netWorthInformation.minRepayment;
    const extraRepayment = netWorthInformation.extraRepayment;
    const investing = netWorthInformation.investing;
    const [years, weeks] = netWorthInformation.timeToPayoff;
    const totalNetWorth = netWorthInformation.totalNetWorth;

    document.getElementById('investing').innerHTML = `$${investing}`;
    document.getElementById('repaying').innerHTML = `$${extraRepayment}`;

    document.getElementById('repayment-static').innerHTML = `Mortgage Repayment:`;
    document.getElementById('extra-repayment-static').innerHTML = `Extra Repayment:`;
    document.getElementById('time-to-payoff-static').innerHTML = `Time to Payoff:`;
    document.getElementById('regular-investment-static').innerHTML = `Weekly Investing:`;
    document.getElementById('extra-investment-static').innerHTML = `Weekly Investing after Mortgage:`;
    document.getElementById('net-worth-static').innerHTML = `Total Net Worth:`;

    document.getElementById('repayment').innerHTML = `$${minRepayment}`;
    document.getElementById('extra-repayment').innerHTML = `$${totalInvestable - (minRepayment + extraRepayment)}`;
    document.getElementById('time-to-payoff').innerHTML = `${years} years and ${weeks} weeks`;
    document.getElementById('regular-investment').innerHTML = `$${investing}`;
    document.getElementById('extra-investment').innerHTML = `$${totalInvestable}`;
    document.getElementById('net-worth').innerHTML = `$${totalNetWorth}`;
}