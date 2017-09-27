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



@NgModule({
  providers: [ProjectService,LFMService],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent, AddProjectComponent,ViewLFMComponent,AddLFMComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
