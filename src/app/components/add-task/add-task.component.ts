import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//BOTON
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
import {Task} from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
//AGREGAR TAREA DESDE PANTALLA
  text: string = "";
  day: string = "";
  reminder:boolean= false;
  showAddTask: boolean = false;

  subscription?:Subscription;

  constructor(
    //BOTON
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle().subscribe(
                          value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }
  //CUANDO SE HACE CLICK ADD
  onSubmit(){
    if(this.text.length === 0){
      alert("Please add task");
      return
    }
    //CREAR NUEVA TAREA 2 FORMAS
    //const newTask={
    //  text:this.text,
     // day: this.day,
     // reminder:this.reminder
    //}// JAVA SCRIP
    const{text,day,reminder}= this
    const newTask= {text,day,reminder}

    this.onAddTask.emit(newTask);
  }
  //TODO emit event

}
