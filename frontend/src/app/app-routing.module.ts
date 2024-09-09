import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path: "", component: ListaClientesComponent},
  {path: "form", component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
