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

  getClientes(): Observable<any[]> {
    const result = this.http.get<any[]>(this.apiUrl);
    // console.log(result);
    return result;
  }

  // Post Clientes

  addCliente(clienteData: any): Observable<any> {  
    console.log('Datos del Cliente', clienteData);
    // Hacer la petición POST a la URL del backend con los datos del formulario

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });    

    const result = this.http.post(this.apiUrl, clienteData, { headers }); 
    console.log(result);
    return result;
  }

  deletecliente(id: string): Observable<any> {
    const result = this.http.delete(this.apiUrl+`/${id}`); 
    console.log(result);
    return result
  }
  
}
