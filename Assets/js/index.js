
//Task Name Form Input
let newTaskNameInput = document.getElementById('#taskName');
let newTaskDescriptionInput = document.getElementById('#taskDescription');
let newAssignedTo = document.getElementById('#assignedTo');
let newDueDate = document.getElementById('#dueDate');
let taskList = document.getElementById('#task-list');
const taskButton = document.getElementById('#taskButton');


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

const toDoTask = new TaskManager();
taskButton.addEventListener("click", validate);


toDoTask.addTask('clean' , 'Rwanda', '6/23/2023');
console.log(toDoTask);


