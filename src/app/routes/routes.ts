import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { SchoolPackageComponent } from '../pages/school-package/school-package.component';
import { SessionsComponent } from '../pages/sessions/sessions.component';
import { MountingComponent } from '../pages/mounting/mounting.component';
import { ModuleWithProviders } from '@angular/core';
import { IdentificationComponent } from '../pages/identification/identification.component';
import { CbtisComponent } from '../pages/school-package/cbtis/cbtis.component';
import { TecComponent } from '../pages/school-package/tec/tec.component';
import { CusComponent } from '../pages/school-package/cus/cus.component';
import { UniverComponent } from '../pages/school-package/univer/univer.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { BranchOfficeComponent } from '../pages/branch-office/branch-office.component';
import { BranchOffice2Component } from '../pages/branch-office2/branch-office2.component';

const appRoutes:Routes = [
    {path: '', component:HomeComponent },
    {path: 'home', component:HomeComponent },
    {path: 'login', component:LoginComponent },
    {path: 'paquetes-escolares', component:SchoolPackageComponent },
    {path: 'sesiones', component:SessionsComponent },
    {path: 'restauraciones', component:MountingComponent },
    {path: 'identificación', component:IdentificationComponent },
    {path: 'cbtis', component:CbtisComponent},
    {path: 'tecnologico', component:TecComponent},
    {path: 'cusur', component:CusComponent},
    {path: 'univer', component:UniverComponent},
    {path: 'admin', component:AdminComponent},
    {path: 'sucursal-1', component:BranchOfficeComponent},
    {path: 'sucursal-2', component:BranchOffice2Component}

    
];


export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);