import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [    
    {path: "register", component: RegisterComponent},
    {path: "**", redirectTo: ''}    
]

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);