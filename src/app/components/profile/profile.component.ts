import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {

    this.user = {
      id_:2,
      nombres: "Maria",
      apellidos: "Lopez",
      username:"mlopez",
      password:"1234",
      email:"maria@gmail.com",
      telefono:"0412-1234567",
      direccion:"Los Mangos.."
    }

  }

}
