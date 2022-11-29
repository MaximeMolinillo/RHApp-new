export class Worker {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public sexe: string,
        public date: Date,
        public identifiant: string,
        public type: string,
        public job: string,
    ){}
}