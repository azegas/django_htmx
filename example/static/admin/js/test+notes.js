// alert("Hello!!!");

all_inputs = document.querySelectorAll('input')
all_inputs
all_inputs[7]

const change_form = document.querySelector('#content-main > form');

// take all the submit fields
document.querySelectorAll(`#${change_form.id} input[type="submit"]`)

// output value of the needed input field
for (let input of document.querySelectorAll(`#${change_form.id} input:not([type="submit"]`)) {
        input.value;
    }

// simply print out the value of the id_name field    
id_name.value

// change the type of the field
function convert_to_text_field(id) {
    document.getElementById(`${id}`).type="text";
}
convert_to_text_field("id_inhabitants");


change_form.addEventListener('submit', function(event) {
        document.getElementById('id_inhabitants').type = 'number';
    });


/////////////////////////////////////////////////////////////////////////////////////

