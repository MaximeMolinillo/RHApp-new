export class DayOff {
    constructor(
        public id: number,
        public start: Date,
        public end: Date,
        public numberOfDays: number,
        public worker: number,
        public state: string
    ){}
}