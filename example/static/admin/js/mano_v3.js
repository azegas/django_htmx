/**
 * 0. When the page has fully loaded, take all the input fields from the form 
 * with a type number (if the field is empty - don't do anything)
 * 
 * 1. render the fields as TEXT fields(it is currently rendered as number), 
 * with commas and everything, applied built in js toLocaleString method. If
 * the field is empty, don't apply toLocaleString method, otherwise NaN appears
 * in an empty field(can heppen when in /add/ page)
 * 
 * 2. when the user clicks on the TEXT field - it immeaditelly converts the 
 * field to NUMBER type field, so the user can properly type numbers. We are
 * then back to the default number field that django has provided. All the 
 * validation works as it should.
 * 
 * 3. when the user leaves the input field - automatic conversion back to the 
 * TEXT field happens(the "blur" event).
 * 
 * 4. before the form submit action, conversion to number field happens 
 * again, so the data is stored to db properly as numbers, how django and 
 * database likes it
*/ 

function convert_to_text_field(field) {
    /**
     * A function that changes the provided HTML input field's type to text
     * It then uses parseFloat to convert the field's value into a 
     * floating-point number
     * 
     * This number can then be passed to a toLocaleString method.
     * 
     * https://byby.dev/js-format-numbers-commas
     * 
     * toLocaleString() method is used to format a number into a string 
     * representation according to the specified locale and formatting options. 
     * This method provides a way to automatically format numbers based on the 
     * user's locale, including adding commas for thousands separation and 
     * specifying decimal points.
    */ 

    field.type = 'text';
    if (field.value != '') {
        field.value = parseFloat(field.value).toLocaleString("en-US");
    }
}

function convert_to_number_field(field) {
    /**
     * A function that takes the value from the field and splits it by commas
     * Then joins them back together to a number
     * Convert the field back to numebr field
    */
    formated_value = field.value.split(',').join('')
    field.value = formated_value
    field.type = 'number';
}

// using jQuery to know when the page has fully loaded
$(document).ready(function() {
    // selecting the needed form
    change_form = document.querySelector('#content-main > form');
    // finding all the input fields, filtering the field to only number fields
    const input_fields = change_form.querySelectorAll('input[type="number"]');

    // for loop to iterate through every chosen field
    for (const input_field of input_fields) {
        convert_to_text_field(input_field);

        // on field click - convert to input field type to number
        input_field.addEventListener('click', function(e) {
            convert_to_number_field(input_field)
        })

        // convert input field type to number number when the cursor goes out
        input_field.addEventListener("blur", function() {
            convert_to_text_field(input_field);
        });

        // on submit - convert the field to number to store to db properly
        change_form.addEventListener('submit', function(e) {
            convert_to_number_field(input_field)
        });
    }
});