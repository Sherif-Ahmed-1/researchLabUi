import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { LFMService } from '../Service/LFM.service'
import { LFM } from '../entity/LFM.entity'

@Component({
    selector: 'researchLap-project-add',
    templateUrl: './../view/viewLFM.html'
})
export class ViewLFMComponent {
    lFM: LFM = new LFM();
    constructor( private lFMService: LFMService) { }
  

}