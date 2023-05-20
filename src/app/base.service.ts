import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class BaseService {
    
    private url: string;

    constructor(postfixUrl: string) {
        this.url = environment.backend_url + postfixUrl;
    }

    getEndPointValue(){
        return this.url;
    }

    getTokenEndPointValue(){
        return environment.backend_url + "token";
    }

    setUpHeaders() {
       return {
           headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin":"http://localhost:4200",
                "Access-Control-Allow-Headers":"origin, x-requested-with, accept, content-type, authorization",
                "Access-Control-Max-Age":"3628800",
                "Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, OPTIONS"
           })
       }
    } 

    setUpAuthHeaders() {
        return {
            headers: new HttpHeaders({
                 'Content-Type': 'application/json',
                 "Access-Control-Allow-Origin":"http://localhost:4200",
                 "Access-Control-Allow-Headers":"origin, x-requested-with, accept, content-type, authorization",
                 "Access-Control-Max-Age":"3628800",
                 "Access-Control-Allow-Methods":"GET, PUT, POST, DELETE, OPTIONS",
                 "Authorization": "Bearer " + localStorage.getItem("accessToken") || []
            })
        }
     } 
}