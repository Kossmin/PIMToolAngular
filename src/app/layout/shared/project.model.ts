import { Member } from "./member.model";

export class Project{
    id: number;
    projectName: string;
    projectNumber:string;
    projectStatus:string;
    member:Member[];
    customer:string;
    startDate: Date;
    endDate?: Date;
    constructor(id: number, projectName: string, projectNumber:string, member:Member[], projectStatus:string, customer:string, startDate: Date, endDate?: Date){
        this.id=id;
        this.projectName = projectName;
        this.projectNumber = projectNumber;
        this.projectStatus = projectStatus;
        this.member = member;
        this.customer = customer;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}