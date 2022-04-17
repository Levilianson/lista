import { Component, OnInit, Input } from '@angular/core';
//UTILIZAR EL BOTON
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
//ELIMINAR BOTON DEL ABOUT
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'lista de tareas new';//originalmente esta en el app.componets.ts
  //PARA EL BOTON
  showAddTask: boolean = true;
  //EL SUBSCRIPTION NO ES OPCIONAL
  subscription?: Subscription;
  
  constructor(
    private uiService:UiService,
    //ELIMINAR BOTON ABOUT
    private router:Router
  ) { //AL HACER CLICK VIENE HACIA AQUI Y LE PASO EL VALOR
    this.subscription = this.uiService.onToggle().subscribe(
                                value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }
  //AL HACER CLICK LE VA A PASAR LOS DATOA AL HEADER
  toggleAddTask(){
    //console.log("toglletask")
    this.uiService.toggleAddTask();
  }
  //ELIMINAR BOTON ABOUT
  hasRoute(route:string){
    return this.router.url === route
  }

}
