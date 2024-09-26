// Function to calculate SIP with increasing investment
function calculateSIPWithIncrease(initialInvestment, increaseRate, monthlyInterestRate, years) {
    let totalValue = 0;
    let currentInvestment = initialInvestment;
    // Loop through each year
    for (let year = 0; year < years; year++) {
        // Loop through each month in the year
        for (let month = 0; month < 12; month++) {
            // Compound the previous value with interest
            totalValue = totalValue * (1 + monthlyInterestRate);
            // Add the current monthly investment
            totalValue += currentInvestment;
        }
        // Increase the investment by the specified rate at the end of the year
        currentInvestment *= (1 + increaseRate);
    }
    return totalValue;
}

function calculateInvestment() {
    // Get values from the form
    const initialInvestment = parseFloat(document.getElementById("initialInvestment").value);
    const increaseRate = parseFloat(document.getElementById("increaseRate").value) / 100;
    const years = parseInt(document.getElementById("years").value);
    const annualInterestRate = parseFloat(document.getElementById("interestRate").value) / 100;

    // Calculate monthly interest rate
    const monthlyInterestRate = Math.pow(1 + annualInterestRate, 1 / 12) - 1;

    // Calculate the future value
    const sipFutureValue = calculateSIPWithIncrease(initialInvestment, increaseRate, monthlyInterestRate, years);

    // Display the result in the HTML
    document.getElementById("result").textContent = `Your investment by the end of ${years} years: ₹${sipFutureValue.toFixed(2)}`
};
