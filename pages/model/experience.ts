import moment from 'moment'
import CompanyService from '../service/company-service'
import Company from './company'
import Project from './project'
import ProjectService from '../service/project-service'

export default class Experience {
    private id!: number
    private fromDate!: Date
    private toDate!: Date | null
    private title!: string
    private companyId!: number
    public company!: Company
    public projects!: Array<Project>

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

    public fetchCompany(): void {
        const company: CompanyService = new CompanyService()
        this.company = company.fetchId(this.companyId)
    }

    public fetchProjects(): void {
        const project: ProjectService = new ProjectService()
        this.projects = project.fetchProjects(this.id)
    }

    public get durationExperience(): string {
        if (this.toDate == null) {
            const from = moment(this._fromDate)
            const now = moment()
            const duration = moment.duration(now.diff(from))

            return this.calculateDuration(duration)
        } else {
            const from = moment(this._fromDate)
            const to = moment(this._toDate)
            const duration = moment.duration(to.diff(from))

            return this.calculateDuration(duration)
        }
    }

    private calculateDuration(duration: any): string {
        if (duration.years() < 1) {
            return duration.months() + 1 + ' mois'
        } else {
            return (
                duration.years() + ' ans ' + (duration.months() + 1) + ' mois'
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
