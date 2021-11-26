import { Project } from "../shared/project.model";


export class ProjectService{

    projects : Project[] =[
        new Project(1, 'PIM', '112', 'new', 'KimSon', new Date(2021, 11, 1)),
        new Project(2, 'PIM2', '142', 'inp', 'KimSon', new Date(2021, 11, 1)),
        new Project(3, 'PIM3', '162', 'pla', 'KimSon', new Date(2021, 11, 1))
    ];

    getProjects(){
        return this.projects.slice();
    }

}