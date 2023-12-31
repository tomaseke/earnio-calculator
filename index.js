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

document.getElementById('calculate').addEventListener('click', function() {
    const amount = parseInt(document.getElementById('amount-input').value?.replace(/[\u00A0\b]/g, '').replaceAll(' ', ''));
    const allocation = parseInt(document.getElementById('allocation').value);
    const years = parseInt(document.getElementById('years').value);

    const finalValue = calculateFinalValueRecursively(amount, appreciation[allocation], years * 12, 0);
    document.getElementById('result').textContent = 'Výsledná hodnota: ' + new Intl.NumberFormat('cs-CZ').format(finalValue.toFixed(2));
});

function calculateFinalValueRecursively (amount, appreciation, months, accruingAmount) {
    console.log(amount, appreciation, months, accruingAmount)
    if (months === 0) return amount + accruingAmount;

    let nextAmount;
    let nextAccruingAmount;

    if (accruingAmount >= 50) {
        nextAmount = accruingAmount + amount;
        nextAccruingAmount = (appreciation - 1) * nextAmount;
    } else {
        const dividend = (appreciation - 1) * amount;
        nextAmount = amount;
        nextAccruingAmount = accruingAmount + dividend;
    }
    return calculateFinalValueRecursively(nextAmount, appreciation, months - 1, nextAccruingAmount);
}

// Sync range and number inputs
document.getElementById('investment-amount').addEventListener('input', syncInputs);
document.getElementById('amount-input').addEventListener('input', syncInputs);

function syncInputs(event) {
    value = event.target.value.replace(/[\u00A0\b]/g, '').replaceAll(' ', '');
    console.log(event.target.value, new Intl.NumberFormat('cs-CZ').format(event.target.value), typeof new Intl.NumberFormat('cs-CZ').format(event.target.value))
    console.log(value, new Intl.NumberFormat('cs-CZ').format(value), typeof new Intl.NumberFormat('cs-CZ').format(value))
    document.getElementById('amount-input').value = new Intl.NumberFormat('cs-CZ').format(value);
    document.getElementById('investment-amount').value = value;
}
