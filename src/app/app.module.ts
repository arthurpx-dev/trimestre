import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutividadeDetalhadaComponent } from './produtividade-detalhada/produtividade-detalhada.component';
import { MesesComponent } from './meses/meses.component';
import { ProdutividadeShowComponent } from './produtividade-show/produtividade-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutividadeDetalhadaComponent,
    MesesComponent,
    ProdutividadeShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
