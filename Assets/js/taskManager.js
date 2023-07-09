//let taskList = document.getElementById('#task-list');

//<-------Bootstrap card that appears after task is added (also on index.html file line 111) ---------->
const createTaskHtml = (taskName, taskDescription, assignedTo, dueDate, status) => {
    const html = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                 <h5 class="card-title">${taskName}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${status}</h6>
                    <p class="card-text">${assignedTo}</p>
                    <p class="card-text">${taskDescription}</p>
                    <p class="card-text">${dueDate}</p>
                    <a href="#" class="card-link">Mark As Done</a>
                     <a href="#" class="card-link">Edit</a>
                     <a href="#" class="card-link">Delete</a>
                </div>
            </div>

        `;
        return html
};
//<-------END of Bootstrap card after task is added ----------------->


//The below section did not work, I did not delete it but commented it out
//<--------------this is the old section-------------------->

// const createTaskHtml = (object) => {
// const html = `
//     <form>
//         <div class="form-group">
//             <label for="Task Name">${object.taskName}</label>
//             <input type="text" class="form-control" id="taskName" placeholder="">
//         </div>
//         <div class="form-group">
//             <label for="Task Description">${object.description}</label>
//             <textarea class="form-control" id="taskDescription" rows="2"></textarea>
//         </div>
//         <div class="form-group">
//             <label for="Assigned To">${object.assignedTo}</label>
//             <select multiple class="required form-control" id="assignedTo">
//                 <option>Emelly</option>
//                 <option>Eric</option>
//                 <option>Rwanda</option>
//                 <option>Halle</option>
//             </select>
//         </div>
//         <div class ="form-group">
//             <form action="">
//                 <label for="DueDate">${object.dueDate}</label>
//                 <input type="date" name="dueDate" id="dueDate">
//             </form>
//         </div>
//     </form>
//         `;
//     return html
// };
    
//<--------------this is the end of old section----------------------->




class taskManager {
    tasks;
  
    constructor(currentId = 0) {
        //this.currentId = currentId;
        this.tasks = [];
        currentId = this.currentId;
      }

      addTask(taskName, description, assignedTo, dueDate, status) {
       this.currentId++;
       const taskObj = {
        id: 0,
        taskName,
        description,
        assignedTo,
        dueDate,
        status: 'TODO',
       };

        this.tasks.push(0,
            taskName,
            description,
            assignedTo,
            dueDate,
            'TODO');
      }
      


      render() {
        let tasksHtmlList = [];
        let freshTask = this.tasks;
        const date = new Date(freshTask.dueDate);
        const formattedDate = 'YYYY-MM-DD';
    
// below is the 'loop' of tasks but I dont think it is right. causes error and does not render properly:
        //for (let i = 0; i < tasksHtmlList.length; i++);
        //{
         //   console.log(taskHtmlList[i]); 
       // }
       
       const taskHtml = createTaskHtml(this.tasks, formattedDate);
        tasksHtmlList.push(taskHtml);
        
        let tasksHtml = tasksHtmlList.join(taskName, newTaskDescriptionInput, newAssignedTo, formattedDate);

       document.getElementById("tasks-cards").innerHTML = tasksHtml;


        // <-------use a refernece ONLY (from Bobby's code---------->
        // let taskHtml = createTaskHtml(this.tasks[this.currentId - 1]);

        // taskHtmlList.push(taskHtml);
        // taskHtmlList.map(task => {
        //     let li = document.createElement('li');
        //     li.innerHtml = task;
        //     taskList.appendChild(li);
        // });
        // document.getElementById('task-form').reset();
        // <-------use a refernece ONLY---------->
    }

    taskTitle(){
      console.log(`To do: ${this.tasks}`);
    }
}

   