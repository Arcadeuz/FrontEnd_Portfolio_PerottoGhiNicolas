export class Social {   
    id? : number;
    nombre : string;
    link : string;

    constructor(nombre: string, link: string){
        this.nombre = nombre;
        this.link = link;
    }
}