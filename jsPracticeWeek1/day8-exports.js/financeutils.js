export function calculateTax(amount, rate = 0.1){
    return amount * rate;
}

export function calculateCompoundInterest(principal, rate, years) {
    return principal * (1 + rate) ** years;
}

export function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}