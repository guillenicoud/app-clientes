import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ClientesService } from '../../services/clientes.service';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-form-editar',
  templateUrl: './form-editar.component.html',
  styleUrl: './form-editar.component.css'
})
export class FormEditarComponent {

  my_form: any;
  clienteId: string;

  constructor(private clientesService: ClientesService, private router: Router, private route: ActivatedRoute) {
    console.log('Datos Recibidos',clientesService.updateCliente);
  }

  ngOnInit(): void {  
    this.my_form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      phonenumber: new FormControl(null, [Validators.required]),
      mail: new FormControl(null, [Validators.required]),
    });

    // Obtener ID del cliente de la ruta
    this.clienteId = this.route.snapshot.paramMap.get('id') || '';

    // Cargar datos del cliente desde el servidor
    this.clientesService.getCliente(this.clienteId).subscribe(cliente => {
      this.my_form.patchValue(cliente);
    });
  }

  onSubmit() {
    // console.log  (this.my_form.value);
    if (this.my_form.valid) {
      const clientData = this.my_form.value;
      console.log(clientData);
    }
  }

  get formControls() {
    return this.my_form.controls;
  }
}