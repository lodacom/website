export default class Company {
    private id!: number
    private name!: string
    private logo!: string | null
    private city!: string
    private country!: string

    constructor(
        id: number,
        name: string,
        logo: string | null,
        city: string,
        country: string
    ) {
        this.id = id
        this.name = name
        this.logo = logo
        this.city = city
        this.country = country
    }

    public get _id(): number {
        return this.id
    }

    public get _logo(): string | null {
        return this.logo
    }

    public get _name(): string {
        return this.name
    }

    public get _city(): string {
        return this.city
    }

    public get _country(): string {
        return this.country
    }
}
