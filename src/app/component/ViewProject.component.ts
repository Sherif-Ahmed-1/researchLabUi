import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { ProjectService } from '../Service/Project.service'
import {ProjectTypeService} from'../Service/ProjectType.service'
import { Project } from '../entity/Project.entity'
import { ProjectType } from '../entity/ProjectType.entity'


@Component({
    selector: 'researchLap-project-add',
    templateUrl: './../view/viewProject.html'
})
export class ViewProjectComponent  implements OnInit
{
    projects=new Array<Project>();
    
        ngOnInit(): void {
            this.projectService.getAllProjects().subscribe(
                (data:any)=>{
                    this.projects=data;
                    console.log(data)
                }
                );
        }
        constructor( private projectService: ProjectService,private projectTypeService:ProjectTypeService) { }
}