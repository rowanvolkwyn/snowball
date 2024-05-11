import { calculateRepayment } from "./calculateRepayment";

export function updatePercentage() {
    const sliderPercentage = document.getElementById('invest-percentage').value / 20;
    const minRepayment = calculateRepayment();
    const availableToInvest = document.getElementById('amount-available').value - minRepayment;

    console.log(`slider: ${sliderPercentage}`);
    console.log(`min: ${minRepayment}`);
    console.log(`available: ${availableToInvest}`);

    amount.innerHTML = `Your minimum payment is ${minRepayment}.`;
}