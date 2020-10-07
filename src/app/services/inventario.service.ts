import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Inventario } from '../models';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = environment.apiUrl + 'inventario';
  }

  getAll(): Observable<Inventario[]> {
    let apiURL = this.url; 
    return this.http.get<Inventario[]>(apiURL);
  }
  
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
  
  create(Inventario:Inventario) {

    const url = `${this.url}`;
    return this.http.post(url,Inventario).pipe(
      tap(result => {
      }),
      // catchError(this.handleError('Error registrando tipo movimiento', []))
    );
  }

  update(Inventario:Inventario) {

    const url = `${this.url}`;

    return this.http.put(url,Inventario).pipe(
      tap(result => {
      }),
      // catchError(this.handleError('Error actualizando tipo de movimiento', []))
    );
  }

  delete(idInventario: number) {

    const url = `${this.url}/${idInventario}`;
    return this.http.delete(url).pipe(
      tap(result => {
      }),
      // catchError(this.handleError('Error eliminando tipo movimiento', []))
    );
  }
  
}
