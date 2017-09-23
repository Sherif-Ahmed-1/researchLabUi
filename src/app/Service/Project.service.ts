import { Injectable } from '@angular/core';
import { Http, Response, } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';

import { Project } from '../entity/Project.entity'
@Injectable()
export class ProjectService {
    constructor(private http: Http) { }
    private baseURL: string = 'http://localhost:8080/project';
    getAllProjects() {
        return this.http.get(this.baseURL + '/getall')
            .map(
            (response: Response) => {
                console.log(response)
                let repsonseEntity = response.json();
                console.log(repsonseEntity)
            }
            )
    }
    addProject(project: Project) {
        return this.http.post(this.baseURL + '/add', project).map((repsone: Response) => { repsone.json() })
    }
}