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
  //SE LLAMA AL SERVICIO Y SE LE PASA LA TAREA A BORRAR
  deleteTask(task:Task){
    this.taskService.deleteTask(task)
      .subscribe(()=>(
      this.tasks =this.tasks.filter( t => t.id !== task.id)
    ))
  }
  toggleReminder(task:Task){
    task.reminder = !task.reminder
    //console.log(task.reminder) // PARA CHEQUEO POR LA CONSOLA
    //PARA ACTUALIZAR LA BASE DE DATOS.
    this.taskService.updateTaskReminder(task).subscribe();
  }

}
