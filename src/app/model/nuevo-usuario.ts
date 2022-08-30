export class NuevoUsuario{
    nombreUsuario!: string;
    email!: string;
    password!: string;
    authorithies!: string[];

    constructor(nombreUsuario:string, email:string, password: string ){
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
        this.authorithies = ["ROLE_USER"];
    }
}