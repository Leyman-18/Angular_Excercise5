import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout/content/content_components/home/home.component';
import { NewyorkComponent } from './components/layout/content/content_components/newyork/newyork.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"newyork",
    component:NewyorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
