// SE IMPORTAN LAS LISTAS DEL TASK LA INTERFACE
import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //NICIALIZA LA LISTA COMO UN ARRAY
  tasks: Task[] = TASKS;
  constructor() { }

  ngOnInit(): void {
  }

}
