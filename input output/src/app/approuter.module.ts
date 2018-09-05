import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Routes,RouterModule } from "@angular/router";



const routes:Routes=[
    // {path:'',component:AppComponent},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent}
];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  
})
export class AppRouterModule { }
