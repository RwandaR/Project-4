//let taskList = document.getElementById('#task-list');
const createTaskHtml = (object) => {
const html = `
    <form>
        <div class="form-group">
            <label for="Task Name">${object.taskName}</label>
            <input type="text" class="form-control" id="taskName" placeholder="">
        </div>
        <div class="form-group">
            <label for="Task Description">${object.description}</label>
            <textarea class="form-control" id="taskDescription" rows="2"></textarea>
        </div>
        <div class="form-group">
            <label for="Assigned To">${object.assignedTo}</label>
            <select multiple class="required form-control" id="assignedTo">
                <option>Emelly</option>
                <option>Eric</option>
                <option>Rwanda</option>
                <option>Halle</option>
            </select>
        </div>
        <div class ="form-group">
            <form action="">
                <label for="DueDate">${object.dueDate}</label>
                <input type="date" name="dueDate" id="dueDate">
            </form>
        </div>
    </form>
        `;
    return html
};
    



class TaskManager {
    tasks;
  
    constructor(currentId = 0){
        currentId = this.currentId;
        this.tasks = [];
      };
      
      addTask(taskName, description, assignedTo, dueDate, status = "TODO") {
        this.currentId++;
        const taskObj = {
            id: this.currentId,
            taskName,
            description,
            assignedTo,
            dueDate,
            status: 'TODO' 
        };
        this.tasks.push(taskObj);
      }

      render() {
        let taskHtmlList = [];
        const date = new Date(dueDate);
        const formattedDate = "2023-07-05";
        for (let addTask = 0; addtask < 5; addTask++);
        const taskHtml = createTaskHtml(taskName, newTaskDescriptionInput, newAssignedTo, formattedDate);
        taskHtmlList.push(taskHtml);
        
        // let taskHtml = createTaskHtml(this.tasks[this.currentId - 1]);

        // taskHtmlList.push(taskHtml);
        // taskHtmlList.map(task => {
        //     let li = document.createElement('li');
        //     li.innerHtml = task;
        //     taskList.appendChild(li);
        // });
        // document.getElementById('task-form').reset();
    }


    
    taskTitle(){
      console.log(`To do: ${this.tasks}`);
    }
}

   