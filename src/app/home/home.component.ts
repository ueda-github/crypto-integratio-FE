import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { LoginService } from './login.service';
// import { Constants } from '../utilities/constants';
// import Swal from 'sweetalert2';
// import { User } from '../shared/models/user.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    styles: [
        'h3 {color: purple}' //inline style
    ]
})

export class HomeComponent implements OnInit { 

    isAdmin: number;

    constructor(private http: HttpClient) {

        this.isAdmin = Number(localStorage.getItem('isAdmin'));
    };

    ngOnInit() {
       
    }

    readAdminRights(){
        return localStorage.getItem('isAdmin');
    }
}