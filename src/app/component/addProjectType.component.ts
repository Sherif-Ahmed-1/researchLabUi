import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { ProjectTypeService } from '../Service/ProjectType.service'
import { ProjectType } from '../entity/ProjectType.entity'
@Component({
    selector: 'researchLap-projectType-add',
    templateUrl: './../view/addProjectType.html'
})
export class AddProjectTypeComponent {
    constructor(private projectTypeService: ProjectTypeService) { }
    private projectType:ProjectType=new ProjectType();
    addprojectType()
    {
        console.log("adding project type");
        console.log(this.projectType);
        this.projectTypeService.addProjectType(this.projectType).subscribe((data:any)=>console.log(data));
    }
}