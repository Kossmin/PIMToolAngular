import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  
  projectStatus = ['new', 'inp', 'pla', 'fin'];
  projects;
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data)=>{
      this.projects = data;
    });
    console.log(this.projects);
  }

  onResetForm(form): void {
    form.reset({
      searchString: '', 
      status: 'new'
    });
  }

  onSearch(searchString: string, status: string): void {
    console.log(searchString);
    console.log(status);
  }

  toggleTrashCan(index: number){
    this.projects[index].isSelected = !this.projects[index].isSelected;
  }
}
