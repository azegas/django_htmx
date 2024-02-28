// What I actually need is:
// 0. on page load, take all the input fields from the form with a type number
// 1. render the fields as TEXT fields(it is currently rendered as number), with commas and everything, applied built in js toLocaleString method
// 2. when the user clicks on the TEXT field - it immeaditelly converts the field to NUMBER field, so the user can properly type numbers
// 3. when the user leaves the input field - automatic conversion back to the TEXT field happens, commas and everything applied as in step 1
// 4. before submit action in the form, conversion to number field happens again, so the data is stored to db properly as numbers, how django likes it


function convert_to_text_field(field) {
    field.type = 'text';
    field.value = parseFloat(field.value).toLocaleString();;
}

function convert_to_number_field(field) {
    formated_value = field.value.split(',').join('')
    field.value = formated_value
    field.type = 'number';
}

$(document).ready(function() {
    change_form = document.querySelector('#content-main > form');
    const input_fields = change_form.querySelectorAll('input[type="number"]');

    for (const input_field of input_fields) {
        convert_to_text_field(input_field);

        input_field.addEventListener('click', function(e) {
            convert_to_number_field(input_field)
        })

        input_field.addEventListener("blur", function() {
            convert_to_text_field(input_field);
        });

        change_form.addEventListener('submit', function(e) {
            convert_to_number_field(input_field)
            console.log("hello")
        });
    }
});