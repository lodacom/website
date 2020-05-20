import moment, { Duration } from 'moment'
import CompanyService from '../service/company-service'
import Company from './company'

export default class Experience {
    private id!: number
    private fromDate!: Date
    private toDate!: Date | null
    private title!: string
    private companyId!: number
    public company!: Company

    constructor(
        id: number,
        fromDate: Date,
        toDate: Date | null,
        title: string,
        companyId: number
    ) {
        this.id = id
        this.fromDate = fromDate
        this.toDate = toDate
        this.title = title
        this.companyId = companyId
    }

    public fetchCompany(): Company {
        const company: CompanyService = new CompanyService()
        return company.fetchId(this.companyId)
    }

    public get durationExperience(): string {
        if (this.toDate == null) {
            const from = moment(this._fromDate)
            const now = moment()
            const duration: Duration = moment.duration(now.diff(from))

            return this.calculateDuration(duration)
        } else {
            const from = moment(this._fromDate)
            const to = moment(this._toDate)
            const duration: Duration = moment.duration(to.diff(from))

            return this.calculateDuration(duration)
        }
    }

    private calculateDuration(duration: Duration): string {
        if (duration.years() < 1) {
            return duration.months() + 1 + ' mois'
        } else {
            return (
                duration.years() +
                ' ans ' +
                (duration.months() + 1) +
                ' mois'
            )
        }
    }

    public get _id(): number {
        return this.id
    }

    public get _fromDate(): Date {
        return this.fromDate
    }

    public get _toDate(): Date | null {
        return this.toDate
    }

    public get _title(): string {
        return this.title
    }

    public get _companyId(): number {
        return this.companyId
    }
}
