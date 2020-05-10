/* eslint-disable prettier/prettier */
import Database from "./database";


export default class People {
    private firstname: string
    private lastname: string
    private city: string
    private country: string

    constructor() {
        this.firstname = ''
        this.lastname = ''
        this.city = ''
        this.country = ''
    }

    public retreivePeople() {
        const db: Database = new Database()
        const retour: any = db.query('SELECT * FROM people')
        console.log(retour)
    }
}