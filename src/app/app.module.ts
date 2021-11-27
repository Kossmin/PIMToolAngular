import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './layout/project-list/project-list.component';
import { ProjectEditComponent } from './layout/project-edit/project-edit.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from './layout/service/project.service';
import { StatusPipePipe } from './layout/custom-pipes/status-pipe.pipe';
import { ToggleTrashCanDirective } from './layout/shared/toggle-trash-can.directive';
import { CheckboxDirective } from './layout/shared/checkbox.directive';
import { NgSelect2Module } from 'ng-select2';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MemberService } from './layout/service/member.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectEditComponent,
    HeaderComponent,
    SidebarComponent,
    StatusPipePipe,
    ToggleTrashCanDirective,
    CheckboxDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelect2Module,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [ProjectService, MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
