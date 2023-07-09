

//<----------Task Name Form Input ------------------->
let newTaskNameInput = document.getElementById('taskName');
let newTaskDescriptionInput = document.getElementById('taskDescription');
let newAssignedTo = document.getElementById('assignedTo');
let newDueDate = document.getElementById('dueDate');
let taskList = document.getElementById('task-list');
const taskButtonNew = document.getElementById('taskButton');
const toDoTask = new taskManager();



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
    } else {
        toDoTask.addTask(newTaskNameInput.value, newTaskDescriptionInput.value, newAssignedTo.value, newDueDate.value)
        toDoTask.render();
        
     // <-------previous code --------------->
         //toDoTask.addTask(createTaskName, createDescription, createAssignedTo, createDueDate)
         //toDoTask.render();
     // <---------previous code --------------->

    }
}

taskButtonNew.addEventListener("click", validate);

toDoTask.addTask();
console.log(toDoTask);


// <---------previous code ----->
    // const taskHtml = createTaskHtml(taskName, newTaskDescriptionInput, newAssignedTo, newDueDate);
    // console.log(taskHtml);
// <---------previous code ----->

