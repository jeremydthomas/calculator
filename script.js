let displayValue = 0;
let firstValue = '';
let secondValue = '';
let operator = '';

const regex = new RegExp(/^\+|-|\*|\/$/);

const screen = document.querySelector('.screen');
const operators = document.querySelectorAll('.operators');
const numBtn = document.querySelectorAll('.num-btns');
const clear = document.querySelector('.clear');
const equals = document.querySelector('#equalBtn');
const negPlus = document.querySelector('#neg');
const percent = document.querySelector('#percentBtn');

const clearScreen = () => {
	clear.addEventListener('click', (e) => {
		if (e.target.textContent === 'AC') {
			displayValue = 0;
			firstValue = '';
			secondValue = '';
			operator = '';
			screen.textContent = 0;
		}
	});
};

const firstInput = () => {
	for (let i = 0; i < numBtn.length; i++) {
		numBtn[i].addEventListener('click', (e) => {
			if (displayValue !== 0) {
				displayValue = displayValue + String(e.target.textContent);
				document.querySelector('.screen').textContent = displayValue;
			}
			if (displayValue === 0) {
				displayValue = e.target.innerText;

				document.querySelector('.screen').textContent = displayValue;
				firstValue = displayValue;
			}

			if (operator !== '') {
				document.getElementById('period').disabled = false;

				secondValue = secondValue + String(e.target.textContent);
				displayValue = secondValue;
				document.querySelector('.screen').textContent = displayValue;
			}
			if (displayValue.includes('.')) {
				document.getElementById('period').disabled = true;
			}
			if (displayValue.length > 12) {
				document.querySelector('.screen').textContent = 'Error';
			} else {
			}
		});
	}
};

firstInput();

const operatorInput = () => {
	for (let i = 0; i < operators.length; i++) {
		operators[i].addEventListener('click', (e) => {
			if (operator !== '') {
				console.log('hi');
				document.getElementById('equalBtn').click();
			}
			if (regex.test(e.target.textContent) === true) {
				operator = e.target.textContent;
			}

			if (e.target.textContent === '+') {
				firstValue = displayValue;
				secondValue = '';
			}
			if (e.target.textContent === '-') {
				firstValue = displayValue;
				secondValue = '';
			}
			if (e.target.textContent === '*') {
				firstValue = displayValue;
				secondValue = '';
			}
			if (e.target.textContent === '/') {
				firstValue = displayValue;
				secondValue = '';
			}
		});
	}
};

operatorInput();

const results = () => {
	equals.addEventListener('click', (e) => {
		if (operator === '+') {
			add(firstValue, secondValue);
			document.querySelector('.screen').textContent = roundUp(displayValue, 2);
		}
		if (operator === '-') {
			subtract(firstValue, secondValue);
			document.querySelector('.screen').textContent = roundUp(displayValue, 2);
			e;
		}
		if (operator === '*') {
			multiply(firstValue, secondValue);
			document.querySelector('.screen').textContent = roundUp(displayValue, 2);
		}
		if (operator === '/' && secondValue === '0') {
			return (document.querySelector('.screen').textContent = 'Just NOO');
		}
		if (operator === '/') {
			divide(firstValue, secondValue);
			document.querySelector('.screen').textContent = roundUp(displayValue, 2);
		}
	});
};

results();

const add = () => {
	return (displayValue = Number(firstValue) + Number(secondValue));
};
const subtract = () => {
	return (displayValue = Number(firstValue) - Number(secondValue));
};
const multiply = () => {
	return (displayValue = Number(firstValue) * Number(secondValue));
};
const divide = () => {
	return (displayValue = Number(firstValue) / Number(secondValue));
};

// Math.round Functionality

let roundUp = (num, places) => {
	const x = Math.pow(10, places);
	return Math.round(num * x) / x;
};

const negSign = () => {
	negPlus.addEventListener('click', (e) => {
		if (secondValue === '') {
			displayValue = (displayValue *= -1).toString();
			firstValue = displayValue;
			document.querySelector('.screen').textContent = displayValue;
		}
		if (secondValue !== '') {
			displayValue = (displayValue *= -1).toString();
			secondValue = displayValue;
			document.querySelector('.screen').textContent = displayValue;
		}
	});
};
const percentSign = () => {
	percentBtn.addEventListener('click', (e) => {
		if (secondValue === '') {
			displayValue = (displayValue / 100).toString();
			firstValue = displayValue;
			document.querySelector('.screen').textContent = displayValue;
			document.getElementById('period').disabled = true;

		}
		if (secondValue !== '') {
			displayValue = (displayValue / 100).toString();
			secondValue = displayValue;
			document.querySelector('.screen').textContent = displayValue;
			document.getElementById('period').disabled = true;

		}
	});
};

percentSign();
negSign();
roundUp();

clearScreen();
