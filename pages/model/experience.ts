import CompanyService from '../service/company-service'
import Company from './company'

export default class Experience {
    private id!: number
    private fromDate!: Date
    private toDate!: Date | null
    private companyId!: number
    public company!: Company

    constructor(
        id: number,
        fromDate: Date,
        toDate: Date | null,
        companyId: number
    ) {
        this.id = id
        this.fromDate = fromDate
        this.toDate = toDate
        this.companyId = companyId
    }

    public fetchCompany(): Company {
        const company: CompanyService = new CompanyService()
        return company.fetchId(this.companyId)
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
