import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Marca } from '../models';

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
  
}
