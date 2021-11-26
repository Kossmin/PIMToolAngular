import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './layout/project-list/project-list.component';
import { ProjectEditComponent } from './layout/project-edit/project-edit.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { ProjectService } from './layout/service/project.service';
import { StatusPipePipe } from './layout/custom-pipes/status-pipe.pipe';
import { ToggleTrashCanDirective } from './layout/shared/toggle-trash-can.directive';
import { CheckboxDirective } from './layout/shared/checkbox.directive';

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
  ],
  providers: [ProjectService, CheckboxDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
