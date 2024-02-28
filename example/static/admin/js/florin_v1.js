// make text field behave like a number field
// remove comma and extra dots from num to allow conversion to float
function number_input_behaviour(input, max_decimal_length) {
    // [ "3", "4,5", "67,6", "7", "", "", "77", "", "", "", "666"].join('.')
    let num_array = input.value.split('.');
    let decimals = '';
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
 
function convert_to_text_field(field) {
    const max_decimal_length = 2;
    field.type = 'text';
    field.value = parseFloat(field.value).toLocaleString();
    field.addEventListener('keyup', function(event) {
        if (!['Backspace', 'Delete'].includes(event.key )) {
            this.value = number_input_behaviour(field, max_decimal_length);
        }
    });
}

 
$( document ).ready(function() {

    const change_form = document.querySelector('#content-main > form');
    const inhabitants = document.getElementById('id_inhabitants');
    convert_to_text_field(inhabitants,)
    change_form.addEventListener('submit', function(event) {
        inhabitants.value = inhabitants.value.split(',').join('');
        document.getElementById('id_inhabitants').type = 'number';
    });
});