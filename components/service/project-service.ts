import Project from '../model/project'
import projectData from '~/data/project.json'

export default class ProjectService {
    private projects: Array<Project> = []

    public constructor() {
        projectData.forEach((project) => {
            this.projects.push(
                new Project(
                    project.id,
                    project.name,
                    project.company,
                    project.description,
                    project.experienceId,
                    project.order
                )
            )
        })
    }

    public fetchProjects(experienceId: number): Array<Project> {
        let retours: Array<Project> = []
        this.projects.forEach(function (proj: Project) {
            if (proj._experienceId === experienceId) {
                retours.push(proj)
            }
        })
        retours = this.orderByOrder(retours)

        return retours
    }

    private orderByOrder(list: Array<Project>): Project[] {
        return list.sort(function (a: Project, b: Project) {
            if (a._order > b._order) {
                return -1
            } else {
                return 1
            }
        })
    }
}
