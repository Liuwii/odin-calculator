/* Basic math operations */

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => {
    if (b == 0) return "Div by 0";
    else return a / b;
}

const operate = (number1, number2, operator) => {
    switch (operator) {
        case "a":
            return add(number1, number2);
        case "s":
            return sub(number1, number2);
        case "m":
            return mul(number1, number2);
        case "d":
            return div(number1, number2);
        default:
            alert("Error - undefined operator!");
    }
}

console.log(operate(1,2,"m"));