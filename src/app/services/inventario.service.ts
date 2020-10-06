import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Inventario } from '../models';

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
  

}
