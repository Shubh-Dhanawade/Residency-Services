import { Routes } from '@angular/router';
import { UserloginComponent } from './profiles/user/userlogin/userlogin.component';
import { UserregisterComponent } from './profiles/user/userregister/userregister.component';
import { WorkerloginComponent } from './profiles/worker/workerlogin/workerlogin.component';
import { WorkerregisterComponent } from './profiles/worker/workerregister/workerregister.component';
import { AdminloginComponent } from './profiles/admin/adminlogin/adminlogin.component';
import { HomepageComponent } from './profiles/homepage/homepage.component';


export const routes: Routes = [
    {
        path:"",
        component: HomepageComponent
    },
    {
        path:"user/login",
        component: UserloginComponent
    },
    {
        path:"user/register",
        component: UserregisterComponent
    },
    {
        path:"worker/login",
        component: WorkerloginComponent
    },
    {
        path:"worker/register",
        component: WorkerregisterComponent
    },
    {
        path:"admin",
        component: AdminloginComponent
    }
];
