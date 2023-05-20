import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from './registration.service';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';
import { Constants } from '../utilities/constants';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-register',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})

export class RegisterComponent implements OnInit {
    
    constructor(private http: HttpClient, private registerService: RegisterService, private router: Router) {
        
    };

    ngOnInit() {

    }

    onSubmit(form: NgForm) {

        form.value.isNewUser = 1;

        this.registerService
            .checkRegisterFields(form.value)
            .subscribe((response)=>{
              
                Swal.fire(Constants.messages.REGISTERED_SUCCESSFULLY);
                this.router.navigate(['']);
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
}