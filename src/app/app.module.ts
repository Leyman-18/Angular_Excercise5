import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/layout/content/content_components/home/home.component';
import { NewyorkComponent } from './components/layout/content/content_components/newyork/newyork.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { TokioComponent } from './components/layout/content/content_components/tokio/tokio.component';
import { VeneciaComponent } from './components/layout/content/content_components/venecia/venecia.component';
import { LondresComponent } from './components/layout/content/content_components/londres/londres.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViajerosComponent } from './components/layout/content/content_components/viajeros/viajeros.component';
import { DestinosComponent } from './components/layout/content/content_components/destinos/destinos.component';
import { ReferenciasfComponent } from './components/layout/content/content_components/referenciasf/referenciasf.component';
import { Ejemplo1Component } from './components/ejemplos/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/ejemplos/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './components/ejemplos/ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './components/ejemplos/ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './components/ejemplos/ejemplo5/ejemplo5.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewyorkComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AsideComponent,
    TokioComponent,
    VeneciaComponent,
    LondresComponent,
    ViajerosComponent,
    DestinosComponent,
    ReferenciasfComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
    Ejemplo4Component,
    Ejemplo5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    // TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
