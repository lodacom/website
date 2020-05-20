export default class Project {
    private id!: number
    private name!: string
    private company!: string
    private description!: string
    private experienceId!: number

    constructor(
        id: number,
        name: string,
        company: string,
        description: string,
        experienceId: number
    ) {
        this.id = id
        this.name = name
        this.company = company
        this.description = description
        this.experienceId = experienceId
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
}