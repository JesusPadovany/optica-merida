import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, AuthService } from '../../services';
import { User } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';


@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthenticationService, AuthService,MessageService]
})

export class LoginComponent implements OnInit {

    model: any = {};

    loading = false;
    returnUrl: string;
    error = '';
    token = false;
    user: User;

    loginForm: FormGroup;
    isSubmitted = false;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService,
        private authenticationService: AuthenticationService,
        private authService: AuthService,
        private formBuilder: FormBuilder
    ) {

    }

    ngOnInit() {
        this.authenticationService.logout();
        this.createForm();
    }

    createForm() {
        this.loginForm = this.formBuilder.group({
            usuario: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {

        this.authenticationService.login(this.model.usuario, this.model.password)
        .toPromise()
        .then(results => {

            this.user = results;
            
            this.authService.login(this.user);
            this.router.navigate(['']);
        })
        .catch(err => { 
            console.log(err); 
            this.showError("Usuario no autenticado");
        });
    }

    private showError(errMsg: string) {
        this.messageService.clear();
        this.messageService.add({ key: 'tc', severity: 'error', summary: errMsg });
    }
}

