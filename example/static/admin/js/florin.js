// 1. finding the id_inhabitants field
// 2. converting it's type to text
// 3. creating an array from the current value of the field
// 4. take decimals


function number_input_behaviour(input, max_decimal_length) {
    // convert the current number into anarray
    let num_array = input.value.split('.');
    let decimals = '';


    // get the last two decimals
    if (num_array.length > 1) {
        // get the last digits split by "."
        decimals = num_array.splice(num_array.length - 1, 1);
        decimals = decimals[0].split('');
        // last array element should have a length of "max_decimal_length"
        // remove the first element until max_decimal_length is matched
        if (decimals.length > max_decimal_length) {
            while (decimals.length > max_decimal_length) {
                num_array.push(decimals.shift());
            }
        }
    }
    
    // restore the integer part after extra dots have been removed
    // remove comma & non numeric element
    num_array = num_array.join('').split(',').join('').split('');
    for (let ndx = 0; ndx <= num_array.length; ndx++) {
        if (num_array[ndx] != '.' && isNaN(num_array[ndx])) {
            num_array.splice(ndx, 1);
        }
    }
    let integer = parseInt(num_array.join('')).toLocaleString();
    if (!isNaN(integer)) {
        integer = '';
    }
    if (decimals.length>1) {
        return integer + '.' + decimals.join('');
    }
    return integer;
}

$( document ).ready(function() {
    const max_decimal_length = 2;
    const change_form = document.querySelector('#content-main > form');
    const inhabitants = document.getElementById('id_inhabitants');
    inhabitants.type = 'text';
    inhabitants.addEventListener('keyup', function(event) {
        if (!['Backspace', 'Delete'].includes(event.key )) {
            this.value = number_input_behaviour(inhabitants, max_decimal_length);
        }
    });
    change_form.addEventListener('submit', function(event) {
        inhabitants.value = inhabitants.value.split(',').join('');
        document.getElementById('id_inhabitants').type = 'number';
    });
});