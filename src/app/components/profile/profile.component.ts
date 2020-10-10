import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { UserLocalStorageService, AuthService} from '../../services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthService, UserLocalStorageService]

})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    private srvAuthService: AuthService
  ) { }

  ngOnInit() {

    /*Obtener datos del usuario del localstorage*/
    let currentUser = this.srvAuthService.getCurrentUser();
    this.user = JSON.parse(currentUser).user;

    // this.user = {
    //   id_:2,
    //   nombres: "Maria",
    //   apellidos: "Lopez",
    //   username:"mlopez",
    //   password:"1234",
    //   email:"maria@gmail.com",
    //   telefono:"0412-1234567",
    //   direccion:"Los Mangos.."
    // }

  }

}
