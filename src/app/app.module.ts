import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './materiais/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from './materiais/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlipCardComponent } from './materiais/flip-card/flip-card.component';
import { DocesComponent } from './paginas/doces/doces.component';
import { HomeComponent } from './paginas/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MenuBodyComponent } from './materiais/menu-body/menu-body.component';
import { AfetoDeMaeComponent } from './paginas/afeto-de-mae/afeto-de-mae.component';
import { SalgadasComponent } from './paginas/salgadas/salgadas.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { CardreceitasComponent } from './materiais/carddoces/cardreceitas.component';
import { CardsalgadosComponent } from './materiais/cardsalgados/cardsalgados.component';
import { PagmaeComponent } from './materiais/pagmae/pagmae.component';





@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MenuComponent,
    FlipCardComponent,
    DocesComponent,
    HomeComponent,
    MenuBodyComponent,
    AfetoDeMaeComponent,
    SalgadasComponent,
    CardreceitasComponent,
    CardsalgadosComponent,
    PagmaeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
          
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
