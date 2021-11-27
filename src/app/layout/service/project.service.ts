import { OnInit } from "@angular/core";
import { map, Observable, Subject } from "rxjs";
import { Member } from "../shared/member.model";
import { Project } from "../shared/project.model";


export class ProjectService  {
    customObservable;

    projects : Project[] =[
        new Project(1, 'PIM', '112', [new Member(1, 'SPK', 'KimSon'),new Member(2, 'TMB', 'BaoThanh')], 'new', 'KimSon', new Date(2021, 11, 1)),
        new Project(2, 'PIM2', '142', [new Member(1, 'SPK', 'KimSon'),new Member(2, 'TMB', 'BaoThanh')], 'inp', 'KimSon', new Date(2021, 11, 1)),
        new Project(3, 'PIM3', '162', [new Member(1, 'SPK', 'KimSon'),new Member(2, 'TMB', 'BaoThanh')], 'pla', 'KimSon', new Date(2021, 11, 1))
    ];

    getProjects() {
        return new Observable<Project[]>((observer) => {
            observer.next(this.projects);
        }).pipe(map(data => {
            const transferedData = [];
            for(const key in data){
                transferedData.push({...data[key], isSelected: false });
            }
            return transferedData;
        }));
    }

    getProjectById(id: number): Project {
        let selectedProject;
        for(let project of this.projects){
            if(project.id === id){
                selectedProject = project;
                for(const mem of selectedProject.member){
                    (mem as any).text = mem.visa + ': ' + mem.name;
                    console.log(mem);
                }
                break;
            }else{
                selectedProject = null;
            }
        }
        return selectedProject;
    }

}