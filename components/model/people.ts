import people from '~/data/people.json'

export default class People {
    private id: number = people.id
    private lastname: string = people.lastname
    private firstname: string = people.firstname
    private city: string = people.city
    private country: string = people.country

    public get _id(): number {
        return this.id
    }

    public get _lastname(): string {
        return this.lastname
    }

    public get _firstname(): string {
        return this.firstname
    }

    public get _city(): string {
        return this.city
    }

    public get _country(): string {
        return this.country
    }
}
