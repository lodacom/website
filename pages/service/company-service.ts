import Company from '../model/company'
import ExperienceService from './experience-service'
import companyData from '~/data/company.json'

export default class CompanyService {
    private companies: Array<Company> = []
    private companyIndex!: number
    private experienceService: ExperienceService = new ExperienceService()

    public constructor() {
        companyData.forEach((company) => {
            this.companies.push(
                new Company(
                    company.id,
                    company.name,
                    company.logo,
                    company.city,
                    company.country
                )
            )
        })
    }

    public fetchId(id: number): Company {
        let index: number = 0
        while (
            index < this.companies.length &&
            this.companies[index]._id !== id
        ) {
            index++
        }
        this.companyIndex = index

        return this.companies[index]
    }

    private joinExperiences(): void {
        this.experienceService.experiences.forEach((exp) => {
            const company = this.fetchId(exp._companyId)
            company._experiences.push(exp)
            this.companies[this.companyIndex] = company
        })
    }

    public retreiveCompanies(): Array<Company> {
        this.joinExperiences()

        return this.companies
    }
}
