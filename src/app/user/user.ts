export class User {

    id: number;
    username: string;
    password: string;
    created: Date;

    constructor( //créa constructeur pour addPokemon afin d'avoir des éléments à proposer à l'user
        username: string = '',
        password: string,
        created: Date = new Date()
    ) {
        this.username = username;
        this.password = password;
        this.created = created; 
    }
}

