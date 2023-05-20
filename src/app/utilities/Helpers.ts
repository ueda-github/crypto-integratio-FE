
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()

export class Helpers  {

    private authenticationChanged = new Subject<boolean>();

    constructor() {
    }
    
    public isAuthenticated():boolean {
        
        return (!(window.localStorage['accessToken'] === undefined || 
            window.localStorage['accessToken'] === null ||
            window.localStorage['accessToken'] === 'null' ||
            window.localStorage['accessToken'] === 'undefined' ||
            window.localStorage['accessToken'] === ''));
    }

    
    static getFormatedDate(date: string){

        let dateWithoutZ = date.substring(0, date.length - 9);

        dateWithoutZ = dateWithoutZ.replace('T', ' ');

        return dateWithoutZ;
    }

    public isAuthenticationChanged():any {
        return this.authenticationChanged.asObservable();
    }

    public getToken():any {
        if( window.localStorage['accessToken'] === undefined || 
            window.localStorage['accessToken'] === null ||
            window.localStorage['accessToken'] === 'null' ||
            window.localStorage['accessToken'] === 'undefined' ||
            window.localStorage['accessToken'] === '') {
            return '';
        }
        let obj = JSON.parse(window.localStorage['accessToken']);
        return obj.token;
    }

    public setToken(data:any):void {
        this.setStorageToken(JSON.stringify(data));
    }

    public failToken():void {
        this.setStorageToken(undefined);
    }

    public logout():void {
        this.setStorageToken(undefined);
    }

    private setStorageToken(value: any):void {
        window.localStorage['accessToken'] = value;
        this.authenticationChanged.next(this.isAuthenticated());
    }
}