import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { LFMService } from '../Service/LFM.service'
import { LFM } from '../entity/LFM.entity'

@Component({
    selector: 'researchLap-lfm-add',
    templateUrl: './../view/addLFM.html'
})
export class AddLFMComponent {
    lfm: LFM = new LFM();
    constructor( private lfmService: LFMService) { }
    addLFM() {
        console.log("adding LFM");
     this.lfmService.addLFM(this.lfm).subscribe((data:any)=>{console.log('succseded'+data)},(err)=>{console.log('error'+err)})   
    }

}
