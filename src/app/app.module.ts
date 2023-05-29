import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './materiais/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from './materiais/menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlipCardComponent } from './materiais/flip-card/flip-card.component';





@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MenuComponent,
    FlipCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
