let sum = '';

function appendToOutput(value) {
    let output = document.getElementById('output');
    output.innerHTML += value;
}

function evaluateSum() {
    let output = document.getElementById('output');
    let result = eval(output.innerHTML);
    output.innerHTML = result;
}

function clearSum() {
    let output = document.getElementById('output');
    output.innerHTML = '';
}














// let clearBtn = document.querySelector('.clear')
// let screen = document.querySelector('#output')

// clearBtn.addEventListener('click', () => {
//     console.log(screen.value = '')
// })
