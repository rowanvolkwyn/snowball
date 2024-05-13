export function calculateExtraRepayments() {
    const loanAmount = document.getElementById('loan-amount').value;
    const loanTerm = document.getElementById('loan-term').value;
    const interestRate = document.getElementById('interest-rate').value;
    const repaymentFrequency = document.getElementById('repayment-frequency').value;
    const extraPayment = document.getElementById('extra-payment').value;

    let calculatedRepayment;
    let effectiveInterestRate;
    let numRepayments;

    const amount = document.getElementById('amount');

    if (loanAmount && loanTerm && interestRate && extraPayment) {
        if (repaymentFrequency == 'weekly') {
            // Original Repayment
            effectiveInterestRate = interestRate / 5200;
            numRepayments = loanTerm * 52;
            calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                            (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
    
            // Extra Repayments
            const totalPayment = Number(calculatedRepayment) + Number(extraPayment);
    
            // Perform Calculations
            const numerator = Math.log(((totalPayment) / (totalPayment - (loanAmount * effectiveInterestRate))))
            const denominator = Math.log(1 + effectiveInterestRate);
            const years = Math.floor((numerator/denominator) / 52);
            const weeks = Math.round((numerator/denominator) % 52);
    
            // Update the DOM
            amount.innerHTML = `By paying $${extraPayment} extra per week, your loan will be repayed in ${years} 
            years and ${weeks} weeks instead of ${loanTerm} years.`;
    
        } else if (repaymentFrequency == 'fortnightly') {
           // Original Repayment
           effectiveInterestRate = interestRate / 2600;
           numRepayments = loanTerm * 26;
           calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                           (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
    
           // Extra Repayments
           const totalPayment = Number(calculatedRepayment) + Number(extraPayment);
    
           // Perform Calculations
           const numerator = Math.log(((totalPayment) / (totalPayment - (loanAmount * effectiveInterestRate))))
           const denominator = Math.log(1 + effectiveInterestRate);
           const years = Math.floor((numerator/denominator) / 26);
           const weeks = 2 * Math.round((numerator/denominator) % 26);
    
           // Update the DOM
           amount.innerHTML = `By paying $${extraPayment} extra per fortnight, your loan will be repayed in ${years} 
           years and ${weeks} weeks instead of ${loanTerm} years.`;
        } else if (repaymentFrequency == 'monthly') {
           // Original Repayment
           effectiveInterestRate = interestRate / 1200;
           numRepayments = loanTerm * 12;
           calculatedRepayment = Math.ceil(loanAmount * ((effectiveInterestRate*Math.pow(1+effectiveInterestRate, numRepayments)) / 
                                                           (Math.pow(1 + effectiveInterestRate, numRepayments) - 1)));
    
           // Extra Repayments
           const totalPayment = Number(calculatedRepayment) + Number(extraPayment);
    
           // Perform Calculations
           const numerator = Math.log(((totalPayment) / (totalPayment - (loanAmount * effectiveInterestRate))))
           const denominator = Math.log(1 + effectiveInterestRate);
           const years = Math.floor((numerator/denominator) / 12);
           const months = Math.round((numerator/denominator) % 12);
    
           // Update the DOM
           amount.innerHTML = `By paying $${extraPayment} extra per week, your loan will be repayed in ${years} 
           years and ${months} months instead of ${loanTerm} years.`;
        };
    }
};
