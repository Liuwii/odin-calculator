const current = document.querySelector("#curr");
const save = document.querySelector("#save");
const numberButtons = document.querySelectorAll(".digit");
const mathButtons = document.querySelectorAll(".math");

current.innerHTML = " ";
save.innerHTML = " ";

let firstNumber = 0;
let operation = null;
let afterCalc = false;

// Number button behaviour
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (afterCalc == true) {
            clear();
        }
        current.innerHTML += button.innerHTML;
    })
})


// Clear button behaviour
document.getElementById("clear").addEventListener('click', () => {
    clear();
})

// Operation button behaviour
mathButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (afterCalc == true) {
            clear();
        }
        if (current.innerHTML !== " ") {
            firstNumber = parseInt(current.innerHTML);
        }
        save.innerHTML = current.innerHTML + " " + button.innerHTML;
        current.innerHTML = " ";
        operation = button.innerHTML;
    })
})

// Equal button behaviour
document.getElementById("equal").addEventListener('click', () => {
    let secondNumber = parseInt(curr.innerHTML);
    let res = operate(firstNumber, secondNumber, operation);
    current.innerHTML = res;
    save.innerHTML = " ";
    afterCalc = true;
})

const clear = () => {
    current.innerHTML = " ";
    save.innerHTML = " ";
    firstNumber = 0;
    operation = null;
    afterCalc = false;
}


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
        case "+":
            return add(number1, number2);
        case "-":
            return sub(number1, number2);
        case "x":
            return mul(number1, number2);
        case "/":
            return div(number1, number2);
        default:
            alert("Error - undefined operator!");
    }
}