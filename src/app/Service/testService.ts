import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/Observable';
@Injectable()
export class TestService {
    constructor(private http: Http) { }
    public test() {
        return this.http.get("http://localhost:8080/test").map((response: Response) => response);
    }

}