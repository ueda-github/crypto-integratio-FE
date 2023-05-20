import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Constants } from '../utilities/constants';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { OrdersService } from './orders.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { User } from '../shared/models/user.model';
import { Orders } from '../shared/models/orders.model';
import { Helpers } from '../utilities/Helpers';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css'],
    styles: [
       // 'h3 {color: purple}' //inline style
    ]
})

export class OrdersComponent implements OnInit {

    ordersArray: any[];

    bids: any[];

    max_length = 10;

    timeArray: any[];

    asks: any[];

    constructor(private http: HttpClient, private ordersService: OrdersService, private router: Router) {
       
        this.onOrdersClick();

        this.ordersArray = [];
        this.timeArray = [];

        this.asks = [];
        this.bids = [];
    };

    formatTableData(data: any[]){

        for (let index = 0; index < this.max_length; index++) {

            const element = data[index];

            let time = Helpers.getFormatedDate(element.time_exchange);
            let symbol = element.symbol_id;
            let asks = element.asks;
            let bids = element.bids;

            asks.forEach((ask: { price: any; size: any; }) => {
                
                let price = ask.price;
                let size = ask.size;
                this.asks.push({time, price, size});
            });

            bids.forEach((bid: { price: any; size: any; }) => {
                
                let price = bid.price;
                let size = bid.size;
                this.bids.push({time, symbol, price, size});
            });
        };
    }
    
    ngOnInit() {}

    onOrdersClick(){
        
        this.ordersService
            .getAllOrders()
                .subscribe((response)=>{
                
                this.ordersArray = response;
                this.formatTableData(this.ordersArray);
                this.router.navigate(['/orders']);
            },
        error => {
            if(error.status == Constants.status.NOT_FOUND) {
                Swal.fire(Constants.messages.NO_ACCOUNT_FOUND);
            }
             else {
                Swal.fire(Constants.messages.SOMETHING_IS_WRONG);
             }
        });
    }
}