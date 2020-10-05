import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from '../models/index';
import { Md5 } from "ts-md5/dist/md5";
import { Observable } from 'rxjs';




@Injectable()
export class AuthenticationService {

    private url : string;

    constructor(private http: HttpClient)
    { 
       
    }

    login(usuario: string, contrasenia: string) : Observable<User> {

        this.url = environment.apiUrl +  'login';
        const md5Pass = String(Md5.hashStr(contrasenia));

        return this.http.post<User>(this.url , { username: usuario, password: md5Pass })
    }

    register(user: User) : Observable<User> {

        this.url = environment.apiUrl +  'create';

        // const md5Pass = String(Md5.hashStr(password));

        return this.http.post<User>(this.url , user )
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
