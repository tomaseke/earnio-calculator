let years;
let amount;

document.getElementById('calculate').addEventListener('click', function() {
    var amount = parseInt(document.getElementById('investment-amount').value);
    var years = parseInt(document.getElementById('years').value);
    var yearlyAppreciation = getYearlyAppreciation(amount);

    console.log('Amount:', amount, 'Years:', years, 'Yearly Appreciation:', yearlyAppreciation);

    var finalValue = calculateFinalValue(amount, yearlyAppreciation, years);
    document.getElementById('result').textContent = 'Výsledná hodnota: ' + finalValue.toFixed(2) + ' USD';
});

function getYearlyAppreciation(amount) {
    if (amount < 100) return Math.pow(1.01, 12);
    if (amount < 250) return Math.pow(1.011, 12);
    if (amount < 500) return Math.pow(1.012, 12);
    if (amount < 1000) return Math.pow(1.013, 12);
    if (amount < 2500) return Math.pow(1.014, 12);
    if (amount < 5000) return Math.pow(1.015, 12);
    if (amount < 10000) return Math.pow(1.016, 12);
    if (amount < 25000) return Math.pow(1.017, 12);
    if (amount < 50000) return Math.pow(1.018, 12);
    if (amount < 100000) return Math.pow(1.019, 12);
    if (amount >= 100000) return Math.pow(1.02, 12);
}

function calculateFinalValue(amount, yearlyAppreciation, years) {
    console.log(amount, yearlyAppreciation, years, Math.pow(yearlyAppreciation, years))
    return amount * Math.pow(yearlyAppreciation, years);
}

// Sync range and number inputs
document.getElementById('investment-amount').addEventListener('input', syncInputs);
document.getElementById('amount-input').addEventListener('input', syncInputs);
document.getElementById('years').addEventListener('input', syncInputs);
document.getElementById('years-input').addEventListener('input', syncInputs);

function syncInputs(event) {
    console.log(event.target.value);
    var targetId = event.target.id.includes('amount') ? 'investment-amount' : 'years';
    var inputId = targetId === 'investment-amount' ? 'amount-input' : 'years-input';
    document.getElementById(targetId).value = event.target.value;
    // document.getElementById(targetId).step = event.target.value;
    document.getElementById(inputId).value = event.target.value;
    // document.getElementById(inputId).step = event.target.value;
}
