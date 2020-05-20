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
                    project.experienceId
                )
            )
        })
    }

    public fetchProjects(experienceId: number): Array<Project> {
        const retours: Array<Project> = []
        this.projects.forEach(function (proj: Project) {
            if (proj._experienceId === experienceId) {
                retours.push(proj)
            }
        })

        return retours
    }
}
