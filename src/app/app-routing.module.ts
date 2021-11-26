import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectEditComponent } from './layout/project-edit/project-edit.component';
import { ProjectListComponent } from './layout/project-list/project-list.component';

const routes: Routes = [
  {path: '', component: ProjectListComponent},
  {path: 'list', component: ProjectListComponent},
  {path: 'new', component: ProjectEditComponent},
  {path: ':id', component: ProjectEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
