import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { FormAgregarComponent } from './components/form-agregar/form-agregar.component';
import { FormEditarComponent } from './components/form-editar/form-editar.component';

const routes: Routes = [
  {path: "", component: ListaClientesComponent},
  {path: "agregar", component: FormAgregarComponent},
  {path: "editar", component: FormEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
