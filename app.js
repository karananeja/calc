let display = document.querySelector('.display');
let values = document.querySelectorAll('.value');
const clearAll = document.querySelector('.clear-all');
let displayValue = '';

for (value of values) {
    value.addEventListener('click', function(e) {
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            displayValue += buttonText;
            display.innerText = displayValue;
        } else if (buttonText == 'C') {
            displayValue = '';
            display.innerText = displayValue;
        } else if (buttonText == '=') {
            display.innerText = eval(displayValue);
        } else {
            displayValue += buttonText;
            display.innerText = displayValue;
        }
    });
}

clearAll.addEventListener('click', function() {
    display.innerText = 0;
})