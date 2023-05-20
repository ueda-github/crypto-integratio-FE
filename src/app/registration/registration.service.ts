import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "../base.service"

@Injectable({
    providedIn: 'root'
})

export class RegisterService extends BaseService {
    
    constructor(private http: HttpClient) {
        super('users');
    };
    
    public checkRegisterFields(registrationData: {}){

        return this.http.post(this.getEndPointValue(), registrationData, this.setUpHeaders());
    }
}