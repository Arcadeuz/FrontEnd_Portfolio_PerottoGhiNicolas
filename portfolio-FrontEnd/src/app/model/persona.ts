export class Persona{
    id?: number;
    nombre: string;
    apellido: string;
    acercaDeMi: string;
    fotoPerfil: string;
    color: string;
    propietario?: string;
    
    constructor(nombre: string,apellido: string, acercaDeMi:string, fotoPerfil:string, color:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.acercaDeMi = acercaDeMi;
        this.fotoPerfil = fotoPerfil;
        this.color = color;
    }
}