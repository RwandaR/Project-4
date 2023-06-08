const validFormFieldInput = document.querySelector('#taskName');

const button =document.querySelector('#taskButton');
function validate() {
    const createTaskName = validFormFieldInput.value;
    if (typeof createTaskName === 'string') {
        console.log(createTaskName);
    } else {
        alert('Please insert a valid task name');
    }
}
button.addEventListener('click', validate);
