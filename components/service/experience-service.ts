import moment from 'moment'
import Experience from '../model/experience'
import experienceData from '~/data/experience.json'

export default class ExperienceService {
    private _experiences: Array<Experience> = []

    public fetchExperiences(): void {
        experienceData.forEach((exp) => {
            const fromDate = moment(exp.fromDate, 'DD/MM/YYYY')
            let toDate = null
            let experience = null
            if (exp.toDate !== null) {
                toDate = moment(exp.toDate, 'DD/MM/YYYY')
                experience = new Experience(
                    exp.id,
                    fromDate.toDate(),
                    toDate.toDate(),
                    exp.title,
                    exp.companyId
                )
            } else {
                experience = new Experience(
                    exp.id,
                    fromDate.toDate(),
                    null,
                    exp.title,
                    exp.companyId
                )
            }

            experience.fetchCompany()
            experience.fetchProjects()
            this._experiences.push(experience)
        })
    }

    public orderByDate(list: Array<Experience>): Experience[] {
        return list.sort(function (a: Experience, b: Experience) {
            if (a._fromDate > b._fromDate) {
                return -1
            } else {
                return 1
            }
        })
    }

    public get experiences(): Array<Experience> {
        return this._experiences
    }
}
