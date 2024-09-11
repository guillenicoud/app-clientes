import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ClientesService } from '../../services/clientes.service';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-form-agregar',
  templateUrl: './form-agregar.component.html',
  styleUrl: './form-agregar.component.css'
})
export class FormAgregarComponent {
  my_form: any;

  constructor(private clientesService: ClientesService, private router: Router) {}

  ngOnInit(): void {
    this.my_form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      phonenumber: new FormControl(null, [Validators.required]),
      mail: new FormControl(null, [Validators.required]),
    });

    console.log('Servicio en Edit',this.clientesService);
  }

  botonSubmit() {}

  onSubmit() {
    console.log(this.my_form.value);
    if (this.my_form.valid) {
      const clientData = this.my_form.value;

      this.clientesService.postCliente(clientData).subscribe(
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
