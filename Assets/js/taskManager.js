//let taskList = document.getElementById('#task-list');

//<-------Bootstrap card that appears after task is added (also on index.html file line 111) ---------->
const taskList = document.getElementById('tasks-cards')

const createTaskHtml = (obj) => {
    const html = `
            <div class="card text-bg-dark" style="width: 18rem;">
                <div class="card-body">
                 <h5 class="card-title">${obj.taskName}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${obj.status}</h6>
                    <p class="card-text">${obj.description}</p>
                    <p class="card-text">${obj.assignedTo}</p>
                    <p class="card-text">${obj.dueDate}</p>
                    <a href="#" class="card-link markAsDone">Mark As Done</a>

                </div>
            </div>

        `;
        return html
};
//<-------END of Bootstrap card after task is added ----------------->


class taskManager {
    tasks;
  
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
      }

      addTask(taskName, description, assignedTo, dueDate, status = "TO DO:") {
       this.currentId++;
       const taskObj = {
        id: this.currentId,
        taskName,
        description,
        assignedTo,
        dueDate,
        status: 'TO DO:',
       };
        this.tasks.push(taskObj);
      }
      

      render() {
        let tasksHtmlList = [];
        // let freshTask = this.tasks;
        // const date = new Date(freshTask.dueDate);
        // const formattedDate = 'YYYY-MM-DD';
        for (let i = 0; i < this.tasks.length; i++){
            let taskHtml = createTaskHtml(this.tasks[i]);
            tasksHtmlList.push(taskHtml)
        }
       let html = tasksHtmlList.join('\n')
       taskList.innerHTML = html
    }

    taskTitle(){
      console.log(`TO DO: ${this.tasks}`);
    }
}


   