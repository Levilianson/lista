import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// SE DEBE IMPORTAR CADA COSA QUE SE UTILICE 
@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  //LO QUE VA A DECIR EL TEXTO AL APRETAR
  @Input() text:string="";
  @Input() color:string="";
  @Output() btnClick = new EventEmitter();//EMITIENDO UN TIPO DE ACCION ENVIARLO AL HEADER
  constructor() { }

  ngOnInit(): void {
  }
  //SE CREA LA FUNCION PARA EL BOTON
  onClick(){
    //console.log("clickj") // PARA VER SI SE ACTIVA EL BOTON
    this.btnClick.emit();//LLEVARLO AFUERA
  }

}
