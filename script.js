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
				secondValue = secondValue + String(e.target.textContent);
				displayValue = secondValue;
				document.querySelector('.screen').textContent = displayValue;
			}

			// if (firstValue !== '' && secondValue !== '') {
			// 	secondValue = '';
			// }
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

// const secondInput = () => {
// 	for (let i = 0; i < numBtn.length; i++) {
// 		numBtn[i].addEventListener('click', (e) => {
// 			if (operator !== '') {
// 				secondValue = e.target.textContent;
// 				displayValue = secondValue;
// 				document.querySelector('.screen').textContent = displayValue;
// 			}
// 			if (operator !== '' && firstValue === displayValue) {
// 				secondValue = '';
// 				document.querySelector('.screen').textContent = displayValue;
// 			}
// 		});
// 	}
// };

// secondInput();

const results = () => {
	equals.addEventListener('click', (e) => {
		if (operator === '+') {
			add(firstValue, secondValue);
			document.querySelector('.screen').textContent = displayValue;
		}
		if (operator === '-') {
			subtract(firstValue, secondValue);
			document.querySelector('.screen').textContent = displayValue;
		}
		if (operator === '*') {
			multiply(firstValue, secondValue);
		}
		if (operator === '/' && secondValue === '0') {
			return document.querySelector('.screen').textContent = 'Just NOO';
		}
		if (operator === '/') {
			divide(firstValue, secondValue);
		}
	});
};

results();

const add = () => {
	return (displayValue = Number(firstValue) + Number(secondValue));
	// document.querySelector('.screen').textContent = displayValue;
};
const subtract = () => {
	return (displayValue = Number(firstValue) - Number(secondValue));
	// document.querySelector('.screen').textContent = displayValue;
};
const multiply = () => {
	displayValue = Number(firstValue) * Number(secondValue);
	document.querySelector('.screen').textContent = displayValue;
};
const divide = () => {
	displayValue = Number(firstValue) / Number(secondValue);
	document.querySelector('.screen').textContent = displayValue;
};

// const operate = () => {
// 	if (operator === '+') {
// 		add(firstValue, secondValue);
// 	}
// 	if (operator === '-') {
// 		return subtract(displayValue, secondValue);
// 	}
// 	if (operator === '*') {
// 		return multiply(displayValue, secondValue);
// 	}
// 	if (operator === '/') {
// 		return divide(displayValue, secondValue);
// 	} else {
// 		return 'To Infinity and Beyond!';
// 	}
// };

clearScreen();
