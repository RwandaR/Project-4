class TaskManager {
    tasks;
  
    constructor(currentId = 0){
        currentId = this.currentId;
        this.tasks = [];
      };
      
      addTask(description, assignedTo, dueDate){
        this.tasks.push({
            id: this.currentId,
            description ,
            assignedTo,
            dueDate,
            status: 'TODO' 
        });
        this.currentId++;
      }

    
  
    taskTitle(){
      console.log(`To do: ${this.tasks}`);
    }
}

   