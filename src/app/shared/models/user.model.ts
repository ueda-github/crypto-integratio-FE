import { stringify } from "@angular/compiler/src/util";

export class User {

    userId: number;
     username: string;
     password: string;
     email: string;
     deleted: number;
     active: number;
     isNewUser: number;
     phoneNumber: string;
     access_token: string;
     dateExpirationToken: Date;
     isAdmin: number;
     api_key: string;

    constructor() {
        
        this.userId = 0;
        this.username = "";
        this.password = "";
        this.email = "";
        this.deleted = 0;
        this.active = 0;
        this.isNewUser = 0;
        this.phoneNumber = "";
        this.access_token = "";
        this.dateExpirationToken = new Date();
        this.isAdmin = 0;
        this.api_key = "";
    }
}