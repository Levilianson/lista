//INTEGRGRIDAD DE LA BASE DE DATO DE QUE SE CREO COMO UN ARREGLO TS
import {Task} from "./Task"

//EN ESTE CASO SE CREAN TAREAS SIMULANDO BASE DE DATOS
//CON LA BASE SIMULADA SE LO LLEVA AL db:json
export const TASKS: Task[]=[
    {
        id: 1,
        text: "LISTADOS",
        day:'Agosto 5 12:00',
        reminder: true
    },
    {
        id: 2,
        text: "VISUALES",
        day:'Agosto 5 17:00',
        reminder: true
    },
    {
        id: 3,
        text: "CARACTULAS",
        day:'Agosto 5 19:00',
        reminder: true
    },
    {
        id: 4,
        text: "PERRUNAS",
        day:'Agosto 5 22:00',
        reminder: true
    },
]