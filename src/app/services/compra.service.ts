import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Compra } from '../models';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private url: string;

  constructor(private http: HttpClient) { 
    // this.url = environment.apiUrl + 'compra';
    this.url = environment.apiUrl + 'compras';
  }

  getAll(): Observable<Compra[]> {
    let apiURL = this.url; 
    return this.http.get<Compra[]>(apiURL);
  }
  
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
  
  create(compra: Compra) {

    const url = `${this.url}/`;
    console.log(url);
    return this.http.post(url, compra).pipe(
      tap(result => {
      }),
      // catchError(this.handleError('Error registrando almacen', []))
    );
  }

}
