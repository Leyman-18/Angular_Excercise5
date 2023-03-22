import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout/content/content_components/home/home.component';
import { LondresComponent } from './components/layout/content/content_components/londres/londres.component';
import { NewyorkComponent } from './components/layout/content/content_components/newyork/newyork.component';
import { TokioComponent } from './components/layout/content/content_components/tokio/tokio.component';
import { VeneciaComponent } from './components/layout/content/content_components/venecia/venecia.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"newyork",
    component:NewyorkComponent
  },
  {
    path:"londres",
    component:LondresComponent
  },
  {
    path:"venecia",
    component:VeneciaComponent
  },
  {
    path:"tokio",
    component:TokioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
