import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicsComponent } from './academics/academics.component';
import { ContactComponent } from './contact/contact.component';
import { DepartmentsComponent } from './departments/departments.component';
import { HOMEComponent } from './home/home.component';
import { PlacementComponent } from './placement/placement.component';
import { ResearchComponent } from './research/research.component';

const routes: Routes = [ 
{path:'home',component: HOMEComponent},
{path:'academics',component:AcademicsComponent},
{path:'placement',component:PlacementComponent},
{path:'research',component:ResearchComponent},
{path:'contact',component:ContactComponent},
{path:'departments',component:DepartmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
