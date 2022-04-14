import { Component, OnInit, Input } from '@angular/core';
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
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}