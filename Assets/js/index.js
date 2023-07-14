

//<----------Task Name Form Input ------------------->
let newTaskNameInput = document.getElementById('taskName');
let newTaskDescriptionInput = document.getElementById('taskDescription');
let newAssignedTo = document.getElementById('assignedTo');
let newDueDate = document.getElementById('dueDate');
const taskButtonNew = document.getElementById('taskButton');
const toDoTask = new taskManager();
const tasksList = document.getElementById('taskListCard')
const taskListButton = document.getElementsByClassName('markAsDone');


console.log(tasksList);


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
        
    }
}

taskButtonNew.addEventListener("click", validate);

tasksList.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.classList.contains('markAsDone')){
        tasksList.style.backgroundColor = "green";
        console.log(tasksList);
    }

    // const changeCardColor = tasksList.value;
    // console.log(changeCardColor);
    // if (changeCardColor == true) {
    //     element.style.backgroundColor = "green";
    // }
});


