import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Constants } from '../utilities/constants';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { User } from '../shared/models/user.model';
import { LoginComponent } from '../authentification/login.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    styles: [
        'h3 {color: purple}' //inline style
    ]
})

export class ProfileComponent implements OnInit {

    username: string;
    userEmail: string;
    phoneNumber: string;
    password: string;
    photo: string;
    UserId: Number;
    api_key: string;
    isAdmin: number;

    user = new User();

    constructor(private http: HttpClient, private profileService: ProfileService, private router: Router, private loginComponent: LoginComponent) {

        this.username = "";
        this.userEmail = "";
        this.phoneNumber = "";
        this.password = "";
        this.photo = "../../assets/profile.PNG";
        this.UserId = Number();
        this.isAdmin = 0;
        this.api_key = "";
       
    };

    ngOnInit() {
       
        this.username = localStorage.getItem("username") || "";
        this.userEmail = localStorage.getItem("userEmail") || "";
        this.phoneNumber = localStorage.getItem("phoneNumber") || "";
        this.UserId = Number(localStorage.getItem("userId"));
        this.api_key = localStorage.getItem("api_key")=="null" ? "" : localStorage.getItem("api_key") || "";
        this.isAdmin = Number(localStorage.getItem("isAdmin"));
    }

    onSubmit(form: NgForm) {

        this.profileService
            .updateUser(form.value)
            .subscribe((response)=>{
                
                this.user = response;
                this.loginComponent.setDataToLocalStorage(this.user);
                Swal.fire(Constants.messages.PROFILE_SUCCESSFULLY);
            },
            error => {
                if(error.status == Constants.status.NOT_FOUND) {
                    Swal.fire(Constants.messages.NO_ACCOUNT_FOUND);
                }
                 else {
                    Swal.fire(Constants.messages.SOMETHING_IS_WRONG);
                 }

                 this.router.navigate(['/profile']);
        });
    }
}