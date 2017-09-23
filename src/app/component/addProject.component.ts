import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { ProjectService } from '../Service/Project.service'
import { Project } from '../entity/Project.entity'

@Component({
    selector: 'researchLap-project-add',
    templateUrl: './../view/addProject.html'
})
export class AddProjectComponent {
    project: Project = new Project();
    constructor( private projectService: ProjectService) { }
    addProject() {
        console.log("adding project");
// this.projectService.getAllProjects().subscribe((data:any)=>console.log(data));
     this.projectService.addProject(this.project).subscribe((data:any)=>{console.log('succseded'+data)},(err)=>{console.log('error'+err)})   
    }

}