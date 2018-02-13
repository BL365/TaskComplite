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
  nameTXT = '';
  detailsTXT = '';
  dateTXT = '';
  tasks = JSON.stringify(TASKS);
  retTask = [];
  constructor() {
  localStorage.setItem('MyTasks', this.tasks);
  this.retTask = JSON.parse(localStorage.getItem('MyTasks'));
 }
  add = function (nameTXT, detailsTXT, dateTXT) {
    console.log(nameTXT, detailsTXT, dateTXT, typeof(nameTXT));
    const id: number = this.retTask.length + 1;
    const newTask = {id: id, name: nameTXT, details: detailsTXT, date: dateTXT};
    this.retTask.push(newTask);
    JSON.stringify(this.tasks);
    localStorage.setItem('MyTasks', this.retTask);
    console.log(this.retTask);
  };

  change = function (taskItem) {
    this.nameTXT = Number(taskItem.id);
    this.onKeyUp(taskItem.name);
    this.onKeyUp2(taskItem.details);
    this.onKeyUp3(taskItem.date);

  };

  del = function (taskItem) {
    this.retTask.pop(Number(taskItem.id));
    console.log('task ', taskItem.name, ' удалена');
    JSON.stringify(this.retTask);
    localStorage.setItem('MyTasks', this.retTask);
  };
  onKeyUp(value) {
    this.nameTXT = value;

  }
  onKeyUp2(value) {
   this.detailsTXT = value;

  }
  onKeyUp3(value) {
    this.dateTXT = value;

  }




  ngOnInit() {
  }

}
