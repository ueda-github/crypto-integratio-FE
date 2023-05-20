import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Constants } from '../utilities/constants';
import Swal from 'sweetalert2';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    styles: [
        'h3 {color: purple}' //inline style
    ]
})

export class LoginComponent implements OnInit {
    
    user = new User();

    constructor(private http: HttpClient, private loginService: LoginService, private router: Router) {

    };

    ngOnInit() {
       
    }

    onSubmit(form: NgForm) {

        form.value.isNewUser = 0;
        
        this.loginService
            .checkLoginCredentials(form.value)
            .subscribe((response)=>{
                
                this.user = response;
                this.setDataToLocalStorage(this.user);
                this.router.navigate(['home']);
            },
            error => {
                if(error.status == Constants.status.NOT_FOUND) {
                    Swal.fire(Constants.messages.NO_ACCOUNT_FOUND);
                }
                 else {
                    Swal.fire(Constants.messages.SOMETHING_IS_WRONG);
                 }

                 this.router.navigate(['']);
        });
    }

    setDataToLocalStorage(user: User) {

        localStorage.setItem("accessToken", this.getToken(user.access_token));
        localStorage.setItem("userId", user.userId.toString());
        localStorage.setItem("userEmail", user.email);
        localStorage.setItem("username", user.username);
        localStorage.setItem("phoneNumber", user.phoneNumber);
        localStorage.setItem("tokenExpiresAt", user.dateExpirationToken.toString());
        localStorage.setItem("api_key", user.api_key);
        localStorage.setItem("isAdmin", user.isAdmin.toString());
    }

    getToken(accessToken: string) {

        if(!accessToken || new Date(this.user.dateExpirationToken).getTime() < new Date().getTime()){
            return "null";
        }
        
        return accessToken;
    }
}