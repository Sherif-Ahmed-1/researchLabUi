import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AddProjectComponent} from'../component/addProject.component';
import{ViewLFMComponent} from'../component/viewLFM.component';
import{AddLFMComponent} from'../component/addLFM.component';
const APP_ROUTE: Routes = [
    {path:'',component:AddProjectComponent},
    {path:'viewLFM',component:ViewLFMComponent},
    {path:'addLFM',component:AddLFMComponent}
    
    
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
