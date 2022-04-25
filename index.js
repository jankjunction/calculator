// button declarations
let calculator = document.querySelector('#calculator')
let display = document.querySelector('#display');
let clearBtn = document.querySelector('#clear');
let deleteBtn = document.querySelector('#delete');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let divideBtn = document.querySelector('#divide');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let multiplyBtn = document.querySelector('#multiply');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let subtractBtn = document.querySelector('#subtract');
let decimalBtn = document.querySelector('#decimal');
let zero = document.querySelector('#zero');
let equals = document.querySelector('#equals');
let addBtn = document.querySelector('#add');

// variable declarations
let operator = '';
let num1 = '';
let num2 = '';
let displayText = '0';
let runningDisplayText = ''

// arithmetic functions
function add(x, y) {return +x + +y};
function subtract(x, y) {return x - y;}
function multiply(x, y) {return x * y;}
function divide(x, y) {return x / y};

// 
function operate(operator, x, y) {
    if (operator === '+') {return add(x, y)};
    if (operator === '-') {return subtract(x, y)};
    if (operator === '*') {return multiply(x, y)};
    if (operator === '/') {return divide(x, y)};
};

function clear() {
    num1 = '';
    num2 = '';
    operator = '';
    displayText = '0'
}

function buttonPress(string) {
    (operator === '') ? num1 += string : num2 += string;
    (operator === '') ? displayText = num1 : displayText = num2;
    console.log(num1);
    console.log(num2);
}

// Constantly sets the display to the current value of displaytext
calculator.addEventListener('mouseover', () => {
    display.textContent = displayText;
});

// Clears the values
clearBtn.addEventListener('click', () => {
    clear();
    console.log('cleared')
});

// Operators
divideBtn.addEventListener('click', () => {operator = '/'});
multiplyBtn.addEventListener('click', () => {operator = '*'});
subtractBtn.addEventListener('click', () => {operator = '-'});
addBtn.addEventListener('click', () => {operator = '+'});

// Numbers
seven.addEventListener('click', () => {buttonPress('7')});
eight.addEventListener('click', () => {buttonPress('8')});
nine.addEventListener('click', () => {buttonPress('9')});
four.addEventListener('click', () => {buttonPress('4')});
five.addEventListener('click', () => {buttonPress('5')});
six.addEventListener('click', () => {buttonPress('6')});
three.addEventListener('click', () => {buttonPress('3')});
two.addEventListener('click', () => {buttonPress('2')});
one.addEventListener('click', () => {buttonPress('1')});
zero.addEventListener('click', () => {buttonPress('0')});

// Equals
equals.addEventListener('click', () => {
    displayText = operate(operator,num1,num2);

});





