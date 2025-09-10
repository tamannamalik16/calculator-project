const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(element => {
    element.addEventListener('click', (element) => {
        const btnValue = element.target.innerText;

        if(btnValue === 'AC') {
            currentInput = '';
            inputBox.value = '0';
        } else if(btnValue === '=') {
            try {
                currentInput = eval(currentInput).toString();
                inputBox.value = currentInput;
            } catch {
                inputBox.value = 'Error';
                currentInput = '';
            }

        } else if(btnValue === 'DEL') {
            currentInput = currentInput.substring(0, currentInput.length-1);
            inputBox.value= currentInput;
        } else if(element.target.id == 'plusMinus' ) {
            currentInput = String(-eval(currentInput));
            inputBox.value = currentInput;
        }    else {
            currentInput += btnValue;
            inputBox.value = currentInput;
        }
}
    )}
);
