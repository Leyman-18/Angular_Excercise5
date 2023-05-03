import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/layout/content/content_components/home/home.component';
import { LondresComponent } from './components/layout/content/content_components/londres/londres.component';
import { NewyorkComponent } from './components/layout/content/content_components/newyork/newyork.component';
import { TokioComponent } from './components/layout/content/content_components/tokio/tokio.component';
import { VeneciaComponent } from './components/layout/content/content_components/venecia/venecia.component';
import { ViajerosComponent } from './components/layout/content/content_components/viajeros/viajeros.component';
import { ReferenciasfComponent } from './components/layout/content/content_components/referenciasf/referenciasf.component';
import { DestinosComponent } from './components/layout/content/content_components/destinos/destinos.component';
import { Ejemplo1Component } from './components/ejemplos/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/ejemplos/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './components/ejemplos/ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './components/ejemplos/ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './components/ejemplos/ejemplo5/ejemplo5.component';
import { Ejercicio1Component } from './components/ejercicios/ejercicio1/ejercicio1.component';
import { Ejercicio1vistaComponent } from './components/ejercicios/ejercicio1vista/ejercicio1vista.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path: "destinos",
    component: DestinosComponent
  },
  {
    path: "viajeros",
    component: ViajerosComponent
  },
  {
    path: "familiares",
    component: ReferenciasfComponent
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
  },
  {
    path: "ejemplo1",
    component: Ejemplo1Component
  },
  {
    path: "ejemplo2",
    component: Ejemplo2Component
  },
  {
    path: "ejemplo3",
    component: Ejemplo3Component
  },
  {
    path: "ejemplo4",
    component: Ejemplo4Component
  },
  {
    path: "ejemplo5",
    component: Ejemplo5Component
  },
  {
    path: "ejercicio1",
    component: Ejercicio1Component
  },
  {
    path: "ejercicio1vista",
    component: Ejercicio1vistaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
