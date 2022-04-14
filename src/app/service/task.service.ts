import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-task';
//PARA VER SI UN METODO ES SICRONICO O NO
import { Observable,of } from 'rxjs';
//IMPORTAMOS PARA QQUE LEA DESDE OTRA POSICION
import{HttpClient, HttpHandler} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //PARA UTILIZAR EL HTTP
  private apiUrl = ' http://localhost:5000/task'

  constructor(
    private http:HttpClient
  ) { }
  //CAMBIA LA DEFINICION PARA HACERLO OBSERVABLE
  /*getTasks(): Task[]{
    return TASKS
  }*/
  /*getTasks(): Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks
  }*///PARA USAR EL SERVIR NPM SE MODIFICA
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
}
