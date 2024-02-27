// What I actually need is:
// 0. on page load, take id_inhabitants field
// 1. render the id_inhabitants as Text field(it is currently rendered as number), with commas and everything, applied localestring thing
// 2. when the user clicks on the field - it converts the field to number field, so the user can type and everything
// 3. when the user leaves the id_inhabitants field - it coverts back to the text with commas and everything, applied localestring thing
// 4. before submit, conversion to number field happens again, so the data is stored to db properly as numbers, with decimal numbers and all


function add_commas(field) {
    field.value = parseFloat(field.value).toLocaleString();;
}

function convert_to_text_field(field) {
    field.type = 'text';
}

function initial_changes(field) {
    convert_to_text_field(field)
    add_commas(field)
}

$(document).ready(function() {
    const inhabitants_field = document.getElementById('id_inhabitants');
    initial_changes(inhabitants_field);

    inhabitants_field.addEventListener('click', function(e) {
        formated_value = inhabitants_field.value.split(',').join('')
        inhabitants_field.value = formated_value
        inhabitants_field.type = 'number';
    })

    inhabitants_field.addEventListener("blur", function() {
        initial_changes(inhabitants_field);
      });
});s