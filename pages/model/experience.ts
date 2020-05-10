export default class Experience {
    private id!: number
    private fromDate!: Date
    private toDate!: Date
    private companyId!: number

    constructor(id: number, fromDate: Date, toDate: Date, companyId: number) {
        this.id = id
        this.fromDate = fromDate
        this.toDate = toDate
        this.companyId = companyId
    }

    public get _id(): number {
        return this.id
    }

    public get _fromDate(): Date {
        return this.fromDate
    }

    public get _toDate(): Date {
        return this.toDate
    }

    public get _companyId(): number {
        return this.companyId
    }
}
