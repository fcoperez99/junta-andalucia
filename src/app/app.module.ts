import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { EnalcesComponent } from './enalces/enalces.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { NavegacionComponent } from './navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    EnalcesComponent,
    RedesSocialesComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
