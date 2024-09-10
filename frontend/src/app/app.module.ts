import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

// COMPONENTES
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { FormAgregarComponent } from './components/form-agregar/form-agregar.component';
import { FormEditarComponent } from './components/form-editar/form-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    FormAgregarComponent,
    FormEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
