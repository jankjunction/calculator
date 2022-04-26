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

// arithmetic functions
function add(x, y) {return +x + +y};
function subtract(x, y) {return x - y;}
function multiply(x, y) {return x * y;}
function divide(x, y) {return x / y};

// 
function operate(operator, x, y) {
    if (operator === '+') {return add(x, y).toString()};
    if (operator === '-') {return subtract(x, y).toString()};
    if (operator === '*') {return multiply(x, y).toString()};
    if (operator === '/') {return divide(x, y).toString()};
};
//
function clear() {
    num1 = '';
    num2 = '';
    operator = '';
    displayText = '0'
    updateDisplay();
}
//
function buttonPress(string) {
    (operator === '') ? num1 += string : num2 += string;
    (operator === '') ? displayText = num1 : displayText = num2;
    updateDisplay();
}
//
function updateDisplay() {
    display.textContent = displayText.slice(0, 15);
}
// Constantly sets the display to the current value of displaytext
calculator.addEventListener('mousemove', () => {
    display.textContent = displayText.slice(0, 15);
});

document.querySelectorAll('.smallbutton').forEach(item => {
    item.addEventListener('mousemove', event => {
        updateDisplay();
    })
  });

// Clears the values
clearBtn.addEventListener('click', () => {
    clear();
    updateDisplay();
});

// Operators
divideBtn.addEventListener('click', () => {
    if (operator != '') {
        displayText = operate(operator, num1, num2);
        num1 = displayText;
        num2 = '';
        operator = '/';
    } else {
        operator = '/';
        num1 = displayText;
        num2 = '';
    }
    updateDisplay();
});
multiplyBtn.addEventListener('click', () => {
    if (operator != '') {
        displayText = operate(operator, num1, num2);
        num1 = displayText;
        num2 = '';
        operator = '*';
    } else {
        operator = '*';
        num1 = displayText;
        num2 = '';
    }
    updateDisplay();
});
subtractBtn.addEventListener('click', () => {
    if (operator != '') {
        displayText = operate(operator, num1, num2);
        num1 = displayText;
        num2 = '';
        operator = '-';
    } else {
        operator = '-';
        num1 = displayText;
        num2 = '';
    }
    updateDisplay();
});
addBtn.addEventListener('click', () => {
    if (operator != '') {
        displayText = operate(operator, num1, num2);
        num1 = displayText;
        num2 = '';
        operator = '+';
    } else {
        operator = '+';
        num1 = displayText;
        num2 = '';
    }
    updateDisplay();
});

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
    num1 = displayText;
    num2 = '';
    operator = '';
});

// Decimal
decimalBtn.addEventListener('click', () => {
    if (num1.includes('.') && ((num2.includes('.') || operator === ''))) {
        ;
    } else if (num1.includes('.') && !(num2.includes('.'))) {
        buttonPress('.');
    } else {
        buttonPress('.');
    }
});

// Delete
deleteBtn.addEventListener('click', () => {
    if (operator === '') {
        num1 = num1.slice(0, -1);
        displayText = num1;
     } else {
         num2 = num2.slice(0, -1);
         displayText = num2;
    }
    updateDisplay();
});

// Keyboard

document.addEventListener('keydown', function(event) {
    let keyPress = event.key;
    if ('1234567890'.includes(keyPress)) {
        buttonPress(keyPress);}
    if (keyPress === '+') {
        if (operator != '') {
            displayText = operate(operator, num1, num2);
            num1 = displayText;
            num2 = '';
            operator = '+';
        } else {
            operator = '+';
            num1 = displayText;
            num2 = '';
        }
        updateDisplay();
    }
    if (keyPress === '-') {
        if (operator != '') {
            displayText = operate(operator, num1, num2);
            num1 = displayText;
            num2 = '';
            operator = '-';
        } else {
            operator = '-';
            num1 = displayText;
            num2 = '';
        }
        updateDisplay();
    }
    if (keyPress === '*') {
        if (operator != '') {
            displayText = operate(operator, num1, num2);
            num1 = displayText;
            num2 = '';
            operator = '*';
        } else {
            operator = '*';
            num1 = displayText;
            num2 = '';
        }
        updateDisplay();
    }
    if (keyPress === '/') {
        if (operator != '') {
            displayText = operate(operator, num1, num2);
            num1 = displayText;
            num2 = '';
            operator = '/';
        } else {
            operator = '/';
            num1 = displayText;
            num2 = '';
        }
        updateDisplay();
    }
    if (keyPress === '=') {
        displayText = operate(operator,num1,num2);
        num1 = displayText;
        num2 = '';
        operator = '';
    }

    if (keyPress === '.') {
        if (num1.includes('.') && ((num2.includes('.') || operator === ''))) {
            ;
        } else if (num1.includes('.') && !(num2.includes('.'))) {
            buttonPress('.');
        } else {
            buttonPress('.');
        }
    }  
});



