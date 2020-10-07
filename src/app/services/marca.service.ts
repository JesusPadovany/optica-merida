import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Marca } from '../models';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = environment.apiUrl + 'marca';
  }

  getAll(): Observable<Marca[]> {
    let apiURL = this.url; 
    return this.http.get<Marca[]>(apiURL);
  }
  
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  create(marca: Marca) {

    const url = `${this.url}`;
    return this.http.post(url, marca).pipe(
      tap(result => {
      }),
      // catchError(this.handleError('Error registrando tipo movimiento', []))
    );
  }

  update(Marca: Marca) {

    const url = `${this.url}`;

    return this.http.put(url, Marca).pipe(
      tap(result => {
      }),
      // catchError(this.handleError('Error actualizando tipo de movimiento', []))
    );
  }

  delete(idMarca: number) {

    const url = `${this.url}/${idMarca}`;
    return this.http.delete(url).pipe(
      tap(result => {
      }),
      // catchError(this.handleError('Error eliminando tipo movimiento', []))
    );
  }
  
}
