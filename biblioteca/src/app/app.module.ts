import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrosComponent } from './registros/registros.component';
import { RegistrosServices } from './registros/registros.service';
import { HttpClientModule } from '@angular/common/http';
import { Registrosp2Component } from './registrosp2/registrosp2.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrosComponent,
    Registrosp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RegistrosServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
