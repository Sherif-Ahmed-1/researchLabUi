import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import{AddProjectComponent} from'../component/addProject.component'

const APP_ROUTE: Routes = [
    {path:'',component:AddProjectComponent},
    
    
];
@NgModule({
    imports: [
        RouterModule.forRoot(
            APP_ROUTE,
        )
    ],
    exports: [
        RouterModule
    ],

})
export class AppRoutingModule { }
