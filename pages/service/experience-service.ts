import moment from 'moment'
import Experience from '../model/experience'
import experienceData from '~/data/experience.json'

export default class ExperienceService {
    private _experiences: Array<Experience> = []

    public constructor() {
        experienceData.forEach((exp) => {
            const fromDate = moment(exp.fromDate, 'DD/MM/YYYY')
            const toDate = moment(exp.toDate, 'DD/MM/YYYY')
            this._experiences.push(
                new Experience(
                    exp.id,
                    fromDate.toDate(),
                    toDate.toDate(),
                    exp.companyId
                )
            )
        })
    }

    public get experiences(): Array<Experience> {
        return this._experiences
    }
}
