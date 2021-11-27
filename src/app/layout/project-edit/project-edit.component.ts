import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { MemberService } from '../service/member.service';
import { ProjectService } from '../service/project.service';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  status = ['new', 'inp', 'pla', 'fin'];
  editMode:boolean = false;
  id:number;
  startDate;
  endDate;
  selectedProject: Project;
  form:FormGroup;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private projectService: ProjectService,
    private memberService: MemberService) { }


    onItemSelect(item: any) {
      console.log(item);
    }
    onSelectAll(items: any) {
      console.log(items);
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.editMode = params['id'] !== null;
      this.id = +params['id'];
      try{
        this.formInit();
      }catch(e){
        console.log(e);
      this.router.navigate(['/list']);
      }
      this.dropdownInit();
    });
  }

  formInit(){
    if(this.editMode){
      this.selectedProject = this.projectService.getProjectById(this.id);
      if(this.selectedProject == null){
        this.form = new FormGroup({
          number: new FormControl(),
          name: new FormControl(),
          customer: new FormControl(),
          member: new FormControl(),
          status: new FormControl('new'),
          endDate: new FormControl(),
          startDate: new FormControl()
        });
      }else{
        this.form = new FormGroup({
          number: new FormControl(this.selectedProject.projectNumber),
          name: new FormControl(this.selectedProject.projectName),
          customer: new FormControl(this.selectedProject.customer),
          member: new FormControl(this.selectedProject.member),
          status: new FormControl(this.selectedProject.projectStatus),
          endDate: new FormControl(this.selectedProject.endDate),
          startDate: new FormControl(this.selectedProject.startDate)
        });
        this.startDate = this.changeDate(this.selectedProject.startDate);
        this.endDate = this.changeDate(this.selectedProject.endDate);
      }
    }
  }

  changeDate(date: Date){
    let transferDate;
    let fullDate;
    let fullMonth;
    if(date === undefined){
      return;
    }
    if(date.getDate() < 10){
      fullDate = '0' + date.getDate().toString();
    }else{
      fullDate = date.getDate().toString();
    }
    if(date.getMonth() < 10){
      fullMonth = '0' + date.getMonth();
    }else{
      fullMonth = date.getMonth();
    }
    transferDate = date.getFullYear() + '-' + fullMonth + '-' + fullDate;
    return transferDate;
  }

  dropdownInit(){
    this.memberService.getMembers().subscribe(member =>{
      this.dropdownList = member;
    })
    if(this.selectedProject){
      this.selectedItems = this.selectedProject.member;
    }else{
      this.selectedItems = [];
    }
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'text',
      // selectAllText: 'Select All',
      // unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: false
    };
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
