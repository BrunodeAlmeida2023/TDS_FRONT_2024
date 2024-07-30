document.addEventListener('DOMContentLoaded', (event) => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.calculatorButtons');
    const equals = document.getElementById('equals');
    const clear = document.getElementById('clear');

    const ul = window.document.getElementById("ul");
    const input = window.document.getElementById("input");

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.value === 'C') {
                display.value = '';
            } else {
                display.value += button.value;
            }
        });
    });

    equals.addEventListener('click', () => {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Erro';
        }
    });

    clear.addEventListener('click', () => {
        display.value = '';
    });
});
