import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Constants } from '../utilities/constants';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserService } from './users.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { User } from '../shared/models/user.model';
import { LoginComponent } from '../authentification/login.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    styles: [
        'h3 {color: purple}' //inline style
    ]
})

export class UsersComponent implements OnInit {

    user = new User();
    users: any[];
    selectedUser: number;

    constructor(private http: HttpClient,  private userService: UserService, private router: Router, private loginComponent: LoginComponent) {
       
        this.users = [];
        this.getAllUsers();
        this.selectedUser = 0;
    };

    getUserId(userId: number){
       this.selectedUser = userId;
    }

    ngOnInit() {
    
    }

    getAllUsers(){

        this.userService
            .getUsers()
            .subscribe((response)=>{
                
                this.users = response;
            },
            (error) => {
                if(error.status == Constants.status.NOT_FOUND) {
                    Swal.fire(Constants.messages.NO_ACCOUNT_FOUND);
                }
                 else {
                    Swal.fire(Constants.messages.SOMETHING_IS_WRONG);
                 }

                 this.router.navigate(['']);
        });
    }

    deleteUser(userId: number){

        this.userService
            .deleteUser(userId)
            .subscribe((response)=>{
                
                this.users = response;
                Swal.fire(Constants.messages.USER_DELETION_SUCCESSFULLY);
                window.open('/users',"_self");
            },
            (error) => {
                if(error.status == Constants.status.NOT_FOUND) {
                    Swal.fire(Constants.messages.NO_ACCOUNT_FOUND);
                }
                 else {
                    Swal.fire(Constants.messages.SOMETHING_IS_WRONG);
                 }

                 this.router.navigate(['']);
        });
    }

    onSubmit(form: NgForm) {

        this.userService
            .updateUserKey(form.value, this.selectedUser)
            .subscribe((response: User)=>{
                
                this.user = response;
                this.loginComponent.setDataToLocalStorage(this.user);
                Swal.fire(Constants.messages.API_KEY_SUCCESSFULLY);
            },
            (error: { status: number; }) => {
                if(error.status == Constants.status.NOT_FOUND) {
                    Swal.fire(Constants.messages.NO_ACCOUNT_FOUND);
                }
                 else {
                    Swal.fire(Constants.messages.SOMETHING_IS_WRONG);
                 }

                 this.router.navigate(['']);
        });
    }
}