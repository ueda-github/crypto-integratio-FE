import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BaseService } from '../base.service';
import { User } from '../shared/models/user.model';

@Injectable({
    providedIn: 'root'
})

export class UserService extends BaseService {

    constructor(private http: HttpClient) {
        super('users');
    };

    updateUserKey(userData: {}, userId: number) {
        
        return this.http.put<User>(this.getEndPointValue()+"/"+userId, userData, this.setUpAuthHeaders());
    }

    getUsers() {
        
        return this.http.get<any[]>(this.getEndPointValue(), this.setUpAuthHeaders());
    }

    deleteUser(userId: number){

        return this.http.delete<any[]>(this.getEndPointValue()+"/"+userId, this.setUpAuthHeaders());

    }
}