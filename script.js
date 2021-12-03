let displayValue = 0;
let firstValue = '';
let secondValue = '';
let operator = '';
const screen = document.querySelector('.screen');
const addition = document.querySelector('.plus');
const numBtn = document.querySelector('.numBtns');
const clear = document.querySelector('.ac');

const clearScreen = function () {
	displayValue = 0;
	screen.textContent = 0;
};


const inputFirst = () => {
	numBtn.addEventListener('click', (e) => {
		console.log(e.target);

		if (displayValue !== 0) {
			displayValue = displayValue + String(e.target.textContent);
			document.querySelector('.screen').textContent = displayValue;
		}
		if (displayValue === 0) {
			displayValue = e.target.innerText;

			document.querySelector('.screen').textContent = displayValue;
		}
		if (e.target.textContent === 'AC') {
			clearScreen();
		}

		if (displayValue.length > 12) {
			document.querySelector('.screen').textContent = 'Error';
		} else {
			firstValue = displayValue;
		}
	});
};

inputFirst();

const add = (displayValue, secondValue) => {
	return displayValue + secondValue;
};

const subtract = (displayValue, secondValue) => {
	return displayValue - secondValue;
};

const multiply = (displayValue, secondValue) => {
	return displayValue * secondValue;
};

const divide = (displayValue, secondValue) => {
	return displayValue / secondValue;
};

const operate = (operator, displayValue, secondValue) => {
	if (operator === '+') {
		return add(displayValue, secondValue);
	}
	if (operator === '-') {
		return subtract(displayValue, secondValue);
	}
	if (operator === '*') {
		return multiply(displayValue, secondValue);
	}
	if (operator === '/') {
		return divide(displayValue, secondValue);
	} else {
		return 'To Infinity and Beyond!';
	}
};

clearScreen();
