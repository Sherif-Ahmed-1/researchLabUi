import { Injectable } from '@angular/core';
import { Http, Response, } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';

import { LFM } from '../entity/LFM.entity'
@Injectable()
export class LFMService {
    constructor(private http: Http) { }
    private baseURL: string = 'http://localhost:8080/lfm';
  
    getOneLFM() {
        return this.http.get(this.baseURL + '/getOneLFM')
            .map(
            (response: Response) => {
                console.log(response)
                let repsonseEntity = response.json();
                console.log(repsonseEntity)
            }
            )
    }
    addLFM(lfm: LFM) {
        return this.http.post(this.baseURL + '/add', lfm).map((repsone: Response) => { repsone.json() })
    }
}