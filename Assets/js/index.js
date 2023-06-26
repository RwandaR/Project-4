
//Task Name Form Input
const newTaskNameInput = document.querySelector('#taskName');
const newTaskDescriptionInput = document.querySelector('#taskDescription');
const newAssignedTo = document.querySelector('#assignedTo');
const newDueDate = document.querySelector('#dueDate');

const taskButton = document.querySelector('#taskButton');
function validate(event) {
    event.preventDefault();
    const createTaskName = newTaskNameInput.value;
    console.log(createTaskName);
    if (createTaskName == '') {
        alert('Please insert a valid task name');
    }
    const createDescription = newTaskDescriptionInput.value;
    console.log(createDescription);
    if (createDescription == '') {
        alert('Please insert a valid task description');
    }
    const createAssignedTo = newAssignedTo.value;
    console.log(createAssignedTo);
    if (createAssignedTo == false) {
        alert('Please select a name to assign this task');
    }
    const createDueDate = newDueDate.value;
    console.log(createDueDate);
    if (createDueDate == false) {
        alert('Please select a due date for this task');
    }
}
taskButton.addEventListener('click', validate);

const toDoTask = new TaskManager();
toDoTask.addTask('clean' , 'Rwanda', '6/23/2023');
console.log(toDoTask);


