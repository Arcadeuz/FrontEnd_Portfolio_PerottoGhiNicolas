export class Experiencia {
    id? : number;
    nombre : string;
    descripcion : string;
    duracion: number;

    constructor(nombre: string, descripcion: string, duracion: number){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.duracion = duracion;
    }
}
