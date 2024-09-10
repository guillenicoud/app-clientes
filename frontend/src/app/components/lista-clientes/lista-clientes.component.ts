import { Component } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent {

  clientes: any[] = [];

  constructor(private clientesService: ClientesService, private router: Router) { }

  ngOnInit(): void {
    // Llamar al Servicio para obtener clientes
   this.cargarClientes();
  }

  cargarClientes(){
    this.clientesService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
      // console.log(this.clientes);
    })
  }

  agregarCliente() {
    this.router.navigate(["agregar"]);
  }

  editarCliente(cliente : any) {
    console.log(cliente)
    this.clientesService.updateCliente(cliente);
    this.router.navigate(["editar", cliente.id]);
    
  }

  eliminarCliente(id: string) {
    this.clientesService.deleteCliente(id).subscribe(
      () => {
      console.log('Cliente eliminado con exito !');
      this.cargarClientes(); // Recargo los clientes luego del borrado

    })
  }
}
