import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../det-task';
import {FormControl} from '@angular/forms';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = JSON.stringify(TASKS);
  constructor() {
  localStorage.setItem('MyTasks', this.tasks);
  this.tasks = JSON.parse(localStorage.getItem('MyTasks'));
 }
  flag = false;
  selectedTask: Task;
  onSelect(task: Task): void {
    this.selectedTask = task;
    this.flag = true;
    console.log(typeof(this.selectedTask));
  }

  add = function (nameTXT, detailsTXT, dateTXT) {
    const id: number = this.tasks.length + 1;
    const newTask = {id: id, name: nameTXT, details: detailsTXT, date: dateTXT};
    this.tasks.push(newTask);
    JSON.stringify(this.tasks);
    localStorage.setItem('MyTasks', this.retTask);
    console.log(this.tasks);
  };

  del = function (taskItem) {
    this.tasks.pop(Number(taskItem.id));
    console.log('task ', taskItem.name, ' удалена');
    JSON.stringify(this.tasks);
    localStorage.setItem('MyTasks', this.tasks);
  };

  clear() {
    this.flag = false;
  }

  change = function (selectedTask) {/*id, name, details, date*/
    for (const t of this.tasks) {
      if (t.id === selectedTask.id) {
        this.tasks.pop(t.id);
        this.tasks.push(selectedTask);
        JSON.stringify(this.tasks);
        localStorage.setItem('MyTasks', this.tasks);
        this.clear();
        break;
      }
    }
  };
  ngOnInit() {
  }
}
