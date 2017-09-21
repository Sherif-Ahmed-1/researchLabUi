import { Component,OnInit } from '@angular/core';
import { TestService } from './Service/testService'
@Component({
  selector: 'my-app',
  template: `<h1>dfsdf {{name}}</h1>`,
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
      this.service.test().subscribe(data=>{
        console.log(data);
        this.name=data.toString()
      }
        );
    }

    name = 'Angular';
  constructor(private service: TestService) { }

}
