import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocalStorageService, AuthService } from '../../services';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers: [ UserLocalStorageService, AuthService]
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private srvAuthService: AuthService, 
    private local: UserLocalStorageService
  ) { }

  ngOnInit() {

    this.srvAuthService.logout();
    this.local.deleteRolesLocalStorage();
    this.router.navigate(['/login']);

  }

}
