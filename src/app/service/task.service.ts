import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-task';
//PARA VER SI UN METODO ES SICRONICO O NO
import { Observable,of } from 'rxjs';
//IMPORTAMOS PARA QQUE LEA DESDE OTRA POSICION
import{HttpClient, HttpHeaders} from '@angular/common/http'

//REMPLAZAR OBJETOS QUE SE LE MANDE SE AÑADE ARRIBA, SE ESPECIFICA
// QUE ES DEL TIPO JSON EL ARCHIVO QUE SE RECIBE AL SERVIDOR
const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //PARA UTILIZAR EL HTTP
  private apiUrl = ' http://localhost:5000/tasks'

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
  deleteTask(task:Task): Observable<Task>{
    const url =`${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }
  //ACTUALIZAR LA BASE DE DATOS CON EL OBJETO QUE SE LE MANDA.
  //Y TAMBIEN COMO MANEJAR DICHO ARCHIVO
  updateTaskReminder(task:Task): Observable<Task>{
    const url =`${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }
}
