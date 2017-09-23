import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { ProjectService } from '../Service/Project.service'
import {ProjectTypeService} from'../Service/ProjectType.service'
import { Project } from '../entity/Project.entity'
import { ProjectType } from '../entity/ProjectType.entity'


@Component({
    selector: 'researchLap-project-add',
    templateUrl: './../view/addProject.html'
})
export class AddProjectComponent implements OnInit {
        ngOnInit(): void {
            this.projectTypeService.getAll().subscribe((data:any)=>{this.projectsType=data;
                console.log(data)});
        }

    project: Project = new Project();
    projectsType=new Array<ProjectType>();
    selectedType:any;
    constructor( private projectService: ProjectService,private projectTypeService:ProjectTypeService) { }
    addProject() {
        console.log("adding project");
        console.log(this.project);
        // console.log(this.selectedType);
// this.projectService.getAllProjects().subscribe((data:any)=>console.log(data));
     this.projectService.addProject(this.project).subscribe((data:any)=>{console.log('succseded'+data)},(err)=>{console.log('error'+err)})   
    }

}