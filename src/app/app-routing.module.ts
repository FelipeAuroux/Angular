import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocesComponent } from './paginas/doces/doces.component';
import { HomeComponent } from './paginas/home/home.component';
import { SalgadasComponent } from './paginas/salgadas/salgadas.component';
import { AfetoDeMaeComponent } from './paginas/afeto-de-mae/afeto-de-mae.component';
import { ExplicareceitasComponent } from './paginas/explicareceitas/explicareceitas.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'doces', component: DocesComponent},
  {path: 'salgadas', component: SalgadasComponent},
  {path: 'afeto-de-mae', component: AfetoDeMaeComponent},
  {path: 'detalhes', component: ExplicareceitasComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
