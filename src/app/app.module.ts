import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import{TestService}from'./Service/testService'
// import { AppRoutingModule } from './navigation/app.nav';
@NgModule({
  providers:[TestService],
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
