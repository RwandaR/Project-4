//let taskList = document.getElementById('#task-list');
const createTaskHtml = (object) => {
const html = `
        <div class= "form-group">
            <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-primary mb-2 done-button">${object.currentId}</div>
                <h5 class ="card-title'>${object.taskName}</h5>
                <h6 class ="card-subtitle mb-2 text-danger'>${object.dueDate}</h5>
                <p class="card-text">${object.description}</p>
                <h6 class ="card-subtitle mb-2 text-danger">${object.assignedTo} </h6>
            </div>
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
            description ,
            assignedTo,
            dueDate,
            status: 'TODO' 
        };
        this.tasks.push(taskObj);
      }

      render() {
        let taskHtmlList = [];
        let taskHtml = createTaskHtml(this.tasks[this.currentId - 1]);

        taskHtmlList.push(taskHtml);
        taskHtml.localeCompare(task => {
            let li = document.createElement ('li');
            li.innerHtml = task;
            taskList.appendChild(li);
        });
        document.getElementById('task-form').reset();
    }


    
    taskTitle(){
      console.log(`To do: ${this.tasks}`);
    }
}

   