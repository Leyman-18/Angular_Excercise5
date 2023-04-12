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
