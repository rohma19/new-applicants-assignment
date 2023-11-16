const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentCalculation = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonValue = button.innerText;

        if (buttonValue === '=') {
            try {
                const result = eval(currentCalculation);
                display.value = result;
            } catch (error) {
                display.value = 'Error';
            }
        } else if (buttonValue === 'AC') {
            display.value = '';
            currentCalculation = '';
        } else if (buttonValue === 'DEL') {
            currentCalculation = currentCalculation.slice(0, -1);
            display.value = currentCalculation;
        } else {
            currentCalculation += buttonValue;
            display.value = currentCalculation;
        }
    });
});
