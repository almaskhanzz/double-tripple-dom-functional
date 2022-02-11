function getNumber(isNumber) {
    const numberField = document.getElementById('number-field');
    const numberText = numberField.value;
    const numberFloat = parseFloat(numberText);
    if (numberFloat > 0 && typeof (numberFloat) == 'number') {
        if (isNumber == true) {
            const numberUpdate = numberFloat * 2;
            const outputField = document.getElementById('output-number');
            outputField.innerText = numberUpdate;
            //clearing the input field..
            numberField.value = '';
        }
        else {
            const numberUpdate = numberFloat * 3;
            const outputField = document.getElementById('output-number');
            outputField.innerText = numberUpdate;
            //clearing the input field..
            numberField.value = '';
        }
    }
    else {
        alert('Please enter a valid number');
        numberField.value = '';
    }
}
//double section...
document.getElementById('double-button').addEventListener('click', function () {
    const doubleNumber = getNumber(true);
})
//triple section...
document.getElementById('tripple-button').addEventListener('click', function () {
    const trippleNumber = getNumber(false);
})