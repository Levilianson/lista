import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'lista de tareas new';//originalmente esta en el app.componets.ts
  
  constructor() { }

  ngOnInit(): void {
  }
  //AL HACER CLICK LE VA A PASAR LOS DATOA AL HEADER
  toggleAddTask(){
    console.log("toglletask")
  }

}
