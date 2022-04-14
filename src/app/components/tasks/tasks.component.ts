// SE IMPORTAN LAS LISTAS DEL TASK LA INTERFACE
import { Component, OnInit } from '@angular/core';
//import { TASKS } from 'src/app/mock-task'; //SE LO UTILIZAN DESDE EL SERVICE

import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //NICIALIZA LA LISTA COMO UN ARRAY
  //tasks: Task[] = TASKS; //CON EL SERVICE AHORA ES VACIO
  tasks: Task[] = [];
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    //PROMESAS DE CLICKEAR
    this.taskService.getTasks().subscribe((tasks)=>(
      this.tasks = tasks
    ));
  }

}
