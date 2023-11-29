document.getElementById('calculate').addEventListener('click', function() {
    const amount = parseInt(document.getElementById('investment-amount').value);
    const allocation = parseInt(document.getElementById('allocation').value);
    const years = parseInt(document.getElementById('years').value);
    const yearlyAppreciation = getYearlyAppreciation(allocation);

    console.log('Amount:', amount, 'Years:', years, 'Yearly Appreciation:', yearlyAppreciation);

    const finalValue = calculateFinalValue(amount, yearlyAppreciation, years);
    document.getElementById('result').textContent = 'Výsledná hodnota: ' + new Intl.NumberFormat('cs-CZ').format(finalValue.toFixed(2));
});

const appreciation = {
    0: 1.01,
    100: 1.011,
    250: 1.012,
    500: 1.013,
    1000: 1.014,
    2500: 1.015,
    5000: 1.016,
    10000: 1.017,
    25000: 1.018,
    50000: 1.019,
    100000: 1.02,
};

function getYearlyAppreciation(stakedAmount) {
     return Math.pow(appreciation[stakedAmount], 12);
}

function calculateFinalValue(amount, yearlyAppreciation, years) {
    console.log(amount, yearlyAppreciation, years, Math.pow(yearlyAppreciation, years))
    return amount * Math.pow(yearlyAppreciation, years);
}

// Sync range and number inputs
document.getElementById('investment-amount').addEventListener('input', syncInputs);
document.getElementById('amount-input').addEventListener('input', syncInputs);

function syncInputs(event) {
    document.getElementById('investment-amount').value = event.target.value;
    document.getElementById('amount-input').value = event.target.value;
}
