//Listen to submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//Calculate Results
function calculateResults(e) {
    console.log('calculating');
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthlypayment = document.getElementById('monthly-payment');
    const totalpayment = document.getElementById('total-payment');
    const totalinterest = document.getElementById('total-interest');


    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute Monthly Payment

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if(isFinite(monthly)) {
        monthlypayment.value = monthly.toFixed(2);
        totalpayment.value = (monthly * calculatedPayments).toFixed(2);
        totalinterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    } else {
        showError('Please Check values')
    }

    e.preventDefault();
}

function showError(error) {
    // Create Div
    const errorDiv = document.createElement('div');

    // Get Elements

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}
