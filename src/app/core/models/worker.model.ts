export class Worker {
    constructor(
        public id: number,
        public lastname: string,
        public firstname: string,
        public sexe: string,
        public birthday: Date,
        public type: string,
        public fonction: Array<string>,
    ){}
}