// we are testing this function w/ test

export function calculateSalesTax(subTotal, taxRate) {
    // toFixed turns the result to a string and rounds
    // so we use Number to turn it bac
    return Number((subTotal * taxRate).toFixed(2))
}


export function factorial(num) {
    // 5! factorial = 5*4*3*2*1
    return (num < 2) ? 1 : num * factorial(num - 1)
}