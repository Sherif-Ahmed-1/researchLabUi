import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing/app.nav';
import { AppComponent } from './app.component';
import { ProjectService } from './Service/Project.service';
import { AddProjectComponent } from './component/addProject.component';
import{LFMService} from './Service/LFM.service';
import{ViewLFMComponent} from './component/viewLFM.component';
import{AddLFMComponent} from './component/addLFM.component';
import { ProjectTypeService } from './Service/ProjectType.service'
import { AddProjectTypeComponent } from './component/addProjectType.component'
import{ViewProjectComponent} from './component/ViewProject.component'



@NgModule({
  providers: [ProjectService, ProjectTypeService,LFMService],  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
declarations: [AppComponent, AddProjectComponent, AddProjectTypeComponent,ViewProjectComponent,ViewLFMComponent,AddLFMComponent],  bootstrap: [AppComponent]
})
export class AppModule { }
