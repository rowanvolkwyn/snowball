export function calculateInvestment() {
    const startingAmount = document.getElementById('starting-amount').value;
    const regularDeposit = document.getElementById('regular-deposit').value;
    const depositFrequency = document.getElementById('deposit-frequency').value;
    const investmentTerm = document.getElementById('investment-term').value;
    const growthRate = document.getElementById('growth-rate').value;

    const amount = document.getElementById('amount');
    let annualInvestment;
    const initialTotal = startingAmount * Math.pow(1 + (growthRate / 100), investmentTerm);
    let total;

    if (depositFrequency == 'weekly') {
        annualInvestment = regularDeposit * 52;
        const contributionTotal = annualInvestment * (Math.pow(1 + (growthRate / 100), investmentTerm) - 1) / (growthRate / 100);
        console.log(annualInvestment);
        console.log(growthRate);
        console.log(investmentTerm);
        console.log(initialTotal);
        console.log(contributionTotal);
        total = initialTotal + contributionTotal;
        amount.innerHTML = `Investing $${regularDeposit} ${depositFrequency}, over ${investmentTerm} years with a 
        ${growthRate}% growth rate will result in a nest egg of $${Math.round(total)}.`;
    } else if (depositFrequency == 'fortnightly') {
        annualInvestment = regularDeposit * 26;
        const contributionTotal = annualInvestment * (Math.pow(1 + (growthRate / 100), investmentTerm) - 1) / (1 + (growthRate / 100));
        total = initialTotal + contributionTotal;
        amount.innerHTML = `Investing $${regularDeposit} ${depositFrequency}, over ${investmentTerm} years with a 
        ${growthRate}% growth rate will result in a nest egg of $${Math.round(total)}.`;
    } else if (depositFrequency == 'monthly') {
        annualInvestment = regularDeposit * 12;
        const contributionTotal = annualInvestment * (Math.pow(1 + (growthRate / 100), investmentTerm) - 1) / (1 + (growthRate / 100));
        total = initialTotal + contributionTotal;
        amount.innerHTML = `Investing $${regularDeposit} ${depositFrequency}, over ${investmentTerm} years with a 
        ${growthRate}% growth rate will result in a nest egg of $${Math.round(total)}.`;
    } else {
        amount.innerHTML = 'Please choose a valid deposit frequency.';
    };
}