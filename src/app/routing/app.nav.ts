import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import{AddProjectComponent} from'../component/addProject.component'
import{AddProjectTypeComponent} from'../component/addProjectType.component'
import{ViewProjectComponent} from '../component/ViewProject.component'

const APP_ROUTE: Routes = [
    {path:'',component:AddProjectComponent},
    {path:'addProjectType',component:AddProjectTypeComponent},
    {path:'viewProject',component:ViewProjectComponent}

    
    
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
