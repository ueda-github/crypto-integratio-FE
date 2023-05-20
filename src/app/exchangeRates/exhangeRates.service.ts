import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BaseService } from '../base.service';
import { ExchangeRates } from '../shared/models/exchangeRates.model';

@Injectable({
    providedIn: 'root'
})

export class ExchangeRatesService extends BaseService {

    constructor(private http: HttpClient) {
        super('exchangeRates');
    };

    getAllCurrentRates(){

        return this.http.get<ExchangeRates>(this.getEndPointValue()+"/EUR", this.setUpAuthHeaders());
    }
    
}