import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  //INICIALIZO CON LA PRIMER TAREA.
  @Input() task: Task = TASKS[0]
  //PARA BORRAR LA TAREA DESDE LA CRUS
  @Output() onDeleteTask:EventEmitter<Task>= new EventEmitter()
  //PARA HACER FUNCIONAR EL TOOGLE
  @Output() onToggleReminder:EventEmitter<Task>= new EventEmitter()
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  //SE CREA EL METODO PARA SUPRIMIR LA TAREA INCLUYE OUTPUT EVENTEMITER
  onDelete(task: Task){
    //console.log(task);
    this.onDeleteTask.emit(task);
  }
  // TOOGLE 
  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }
}
