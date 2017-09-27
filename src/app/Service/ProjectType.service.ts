import { Injectable } from '@angular/core';
import { Http, Response, } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';

import { ProjectType } from '../entity/ProjectType.entity'
@Injectable()
export class ProjectTypeService {
    constructor(private http: Http) { }
    private baseURL: string = 'http://localhost:8080/projecttype';
    addProjectType(projectType: ProjectType) {
        console.log(projectType);
        return this.http.post(this.baseURL + '/add', projectType).map((response: Response) => { response });
    }
    getAll() {
        return this.http.get(this.baseURL + '/getAll').map((response: Response) => { return response.json() ;}
        )
    }

}