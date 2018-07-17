import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PossibleComponent } from './possible/possible.component';
import { HowComponent } from './how/how.component';
import { ScamsComponent } from './scams/scams.component';
import { FAQComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PossibleComponent,
    HowComponent,
    ScamsComponent,
    FAQComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
