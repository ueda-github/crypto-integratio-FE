import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BaseService } from '../base.service';
import { User } from '../shared/models/user.model';

@Injectable({
    providedIn: 'root'
})

export class ProfileService extends BaseService {

    constructor(private http: HttpClient) {
        super('users');
    };

    updateUser(userData: {}) {
        
        return this.http.put<User>(this.getEndPointValue()+"/"+localStorage.getItem("userId"), userData, this.setUpAuthHeaders());
    }
}