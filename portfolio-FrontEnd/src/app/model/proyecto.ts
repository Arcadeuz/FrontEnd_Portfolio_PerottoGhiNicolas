export class Proyecto {   
    id? : number;
    nombre : string;
    descripcion : string;
    fotoProyecto: string;
    fechaInicio: Date;
    fechaFin: Date;

    constructor(nombre: string, descripcion: string, fotoProyecto: string, fechaInicio: Date,fechaFin: Date){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fotoProyecto = fotoProyecto;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;  
    }
}
