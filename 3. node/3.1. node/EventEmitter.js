// Реализуйте систему, которая отслеживает выполнение задач через события.

const EventEmitter = require('events');

class TaskManager extends EventEmitter {
  addTask(task) {
    console.log(`Adding task: ${task}`);
    this.emit('taskAdded', task);
  }

  completeTask(task) {
    console.log(`Completing task: ${task}`);
    this.emit('taskCompleted', task);
  }
}

const manager = new TaskManager();

manager.on('taskAdded', (task) => {
  console.log(`Event: Task added -> ${task}`);
});

manager.on('taskCompleted', (task) => {
  console.log(`Event: Task completed -> ${task}`);
});

// Использование
manager.addTask('Task 1');
manager.completeTask('Task 1');


/*
Пояснение:

EventEmitter предоставляет удобный способ управления событиями.
Методы emit и on используются для генерации и обработки событий.
Это полезно для реализации взаимодействия между модулями в Node.js.
*/