  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })

  export class ClientesService {

    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    // Obtener todos los Clientes

    getCliente(id: string): Observable<any> {
      // const result = this.http.get(this.apiUrl+`/${id}`);
      console.log(id);
      const result = this.http.get(`${this.apiUrl}/editar/${id}`);


      return result;
    }

    getClientes(): Observable<any[]> {
      const result = this.http.get<any[]>(this.apiUrl);
      console.log(result);
      return result;
    }

    // Post Clientes

    postCliente(clienteData: any): Observable<any> {  
      console.log('Datos del Cliente', clienteData);
      // Hacer la petición POST a la URL del backend con los datos del formulario

      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });    

      const result = this.http.post(this.apiUrl, clienteData, { headers }); 
      console.log(result);
      return result;
    }

    updateCliente(id: string) {
      console.log('Datos recibidos en Servicio...', id);
      return id;
    }

    deleteCliente(id: string): Observable<any> {
      const result = this.http.delete(this.apiUrl+`/${id}`); 
      // console.log(result);
      return result
    }
    
  }
