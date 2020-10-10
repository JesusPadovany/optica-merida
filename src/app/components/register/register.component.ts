import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, AuthService } from '../../services';
import { User } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Md5 } from "ts-md5/dist/md5";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService,MessageService,AuthenticationService]

})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: User={};

  constructor(
    private router: Router,
    private messageService: MessageService,
    private authenticationService: AuthenticationService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  register() {

   // this.user.password = String(Md5.hashStr(this.user.password));

    this.authenticationService.register(this.user)
    .toPromise()
    .then(results => {
        
      this.authService.login(this.user);
      this.router.navigate(['']);
    })
    .catch(err => { 
      console.log(err); 
      this.showError("Ha ocurrido un error en el registro");
    });
  }

  private showError(errMsg: string) {
    this.messageService.clear();
    this.messageService.add({ key: 'tc', severity: 'error', summary: errMsg });
  }
}
