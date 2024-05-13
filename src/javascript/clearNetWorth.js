export function clearNetWorth() {
    document.getElementById('repayment-static').innerHTML = ``;
    document.getElementById('extra-repayment-static').innerHTML = ``;
    document.getElementById('time-to-payoff-static').innerHTML = ``;
    document.getElementById('regular-investment-static').innerHTML = ``;
    document.getElementById('extra-investment-static').innerHTML = ``;
    document.getElementById('net-worth-static').innerHTML = ``;

    document.getElementById('repayment').innerHTML = ``;
    document.getElementById('extra-repayment').innerHTML = ``;
    document.getElementById('time-to-payoff').innerHTML = ``;
    document.getElementById('regular-investment').innerHTML = ``;
    document.getElementById('extra-investment').innerHTML = ``;
    document.getElementById('net-worth').innerHTML = ``;
}