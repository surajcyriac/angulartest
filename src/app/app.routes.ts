import { Routes } from '@angular/router';
import { EmptableComponent } from './emptable/emptable.component';
import { LoignComponent } from './login/login.component';


export const routes: Routes = [
    {
        path:"employee", component:EmptableComponent
    },
    {
        path: 'login', component:LoignComponent
    }
];
