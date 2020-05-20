export default class Project {
    private id!: number
    private name!: string
    private company!: string
    private description!: string
    private experienceId!: number
    private order!: number

    constructor(
        id: number,
        name: string,
        company: string,
        description: string,
        experienceId: number,
        order: number
    ) {
        this.id = id
        this.name = name
        this.company = company
        this.description = description
        this.experienceId = experienceId
        this.order = order
    }

    public get _id(): number {
        return this.id
    }

    public get _name(): string {
        return this.name
    }

    public get _company(): string {
        return this.company
    }

    public get _description(): string {
        return this.description
    }

    public get _experienceId(): number {
        return this.experienceId
    }

    public get _order(): number {
        return this.order
    }
}
