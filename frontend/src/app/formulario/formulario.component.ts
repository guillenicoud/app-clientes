import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  my_form: any;

  constructor(private clientesService: ClientesService, private router: Router) {}

  ngOnInit(): void {
    this.my_form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      phonenumber: new FormControl(null, [Validators.required]),
      mail: new FormControl(null, [Validators.required]),
    });

    console.log(this.clientesService);
  }

  botonSubmit() {}

  onSubmit() {
    console.log(this.my_form.value);
    if (this.my_form.valid) {
      const clientData = this.my_form.value;

      this.clientesService.addCliente(clientData).subscribe(
        (response) => {
          console.log('Cliente Agregado Exitosamente ...', response);
          this.router.navigate(['/']); // Redirigir a la ruta principal, por ejemplo, '/'

        },
        (error) => {
          console.error('Error al cargar el cliente', error);
        }
      );
    }
  }

  get formControls() {
    return this.my_form.controls;
  }
}
