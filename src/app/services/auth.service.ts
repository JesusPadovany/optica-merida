import { Injectable } from '@angular/core';
import { User } from '../models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(userInfo: User){
    localStorage.setItem('currentUser', JSON.stringify(userInfo));
  }

  public isLoggedIn(){
    return localStorage.getItem('currentUser') !== null;
  }

  public logout(){
    localStorage.removeItem('currentUser');
  }

  public getCurrentUser(){
    return localStorage.getItem('currentUser');
  }
}
