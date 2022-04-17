import { Injectable } from '@angular/core';
// PARA VER LOS CAMBIOS EN LAS FUNCIONES ASINCRONICAS O NO
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  //PARA RECIBIR EVENTOS DEL TEMPLATE
  private subjet = new Subject<any>();
  constructor() { }

  toggleAddTask(): void{
    this.showAddTask =!this.showAddTask;
    this.subjet.next(this.showAddTask);
  }
  onToggle():Observable<any>{
    return this.subjet.asObservable();
  }

}
