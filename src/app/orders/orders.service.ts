import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BaseService } from '../base.service';
import { Orders } from '../shared/models/orders.model';

@Injectable({
    providedIn: 'root'
})

export class OrdersService extends BaseService {

    constructor(private http: HttpClient) {
        super('orders');
    };

    getAllOrders(){

        return this.http.get<any[]>(this.getEndPointValue(), this.setUpAuthHeaders());
    }
    
}