import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { TipoLente } from '../models';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoLenteService {

  private url: string;

  constructor(private http: HttpClient) { 
    // this.url = environment.apiUrl + 'tipo-lente';
    this.url = environment.apiUrl + 'lente_tipos';
  }

  getAll(): Observable<TipoLente[]> {
    let apiURL = this.url; 
    return this.http.get<TipoLente[]>(apiURL);
  }
  
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  create(TipoLente: TipoLente) {

    const url = `${this.url}`;
    return this.http.post(url, TipoLente).pipe(
      tap(result => {
      }),
      // catchError(this.handleError('Error registrando tipo movimiento', []))
    );
  }

  update(TipoLente: TipoLente) {

    const url = `${this.url}`;

    return this.http.put(url, TipoLente).pipe(
      tap(result => {
      }),
      // catchError(this.handleError('Error actualizando tipo de movimiento', []))
    );
  }

  delete(idTipoLente: number) {

    const url = `${this.url}/${idTipoLente}`;
    return this.http.delete(url).pipe(
      tap(result => {
      }),
      // catchError(this.handleError('Error eliminando tipo movimiento', []))
    );
  }
}
