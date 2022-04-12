// PARA MANEJAR LA BASE DATOS
export interface Task{
    id?: number;//PUEDE NO VENIR EL ID 
    text: string;
    day: string;
    reminder: boolean;
}