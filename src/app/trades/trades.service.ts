import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BaseService } from '../base.service';
import { Trades } from '../shared/models/trades.model';

@Injectable({
    providedIn: 'root'
})

export class TradesService extends BaseService {

    constructor(private http: HttpClient) {
        super('trades');
    };

    getAllCurrentTrades(){

        return this.http.get<any[]>(this.getEndPointValue(), this.setUpAuthHeaders());
    }
    
}