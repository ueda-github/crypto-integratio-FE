import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BaseService } from '../base.service';
import { User } from '../shared/models/user.model';

@Injectable({
    providedIn: 'root'
})

export class LoginService extends BaseService {

    constructor(private http: HttpClient) {
        super('users');
    };
    
    public checkLoginCredentials(loginData: {}){

        return this.http.post<User>(this.getEndPointValue(), loginData, this.setUpHeaders());
    }
}