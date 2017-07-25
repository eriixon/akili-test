class Todo extends Akili.Component {
  constructor(...args) {
    super(...args);

    this.scope.todoList = [];
    this.scope.addTask = this.addTask;
    this.scope.deleteTask = this.deleteTask;
    this.scope.getStatusStyle = this.getStatusStyle;
  }

  // will be called after the component creation
  created() {
    this.scope.newTask = this.createNewTask("Add more tasks");
    this.addTask();
  }

  createNewTask(title) {
    return {
      title: title || '',
      completed: false
    }
  }

  addTask() {
    this.scope.todoList.push(this.scope.newTask);
    this.scope.newTask = this.createNewTask();
  }

  deleteTask(task) {
    for(let i = 0, l = this.scope.todoList.length; i < l; i++) {
      if(task === this.scope.todoList[i]) {
        this.scope.todoList.splice(i, 1);
        break;
      }
    }
  }

  getStatusStyle(task) {
    return task.completed? 'line-through': 'normal';
  }
}

// Register the component
Akili.component('todo', Todo);

// Initialize the application
document.addEventListener('DOMContentLoaded', () => Akili.init());