import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Constants } from '../utilities/constants';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TradesService } from './trades.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { User } from '../shared/models/user.model';
import { Trades } from '../shared/models/trades.model';
import { Helpers } from '../utilities/Helpers';

@Component({
    selector: 'app-trades',
    templateUrl: './trades.component.html',
    styleUrls: ['./trades.component.css'],
    styles: [
        //'h3 {color: purple}' //inline style
    ]
})

export class TradesComponent implements OnInit {

    trades = new Trades();
    tradesArray : Array<any>;
    formatedData: Array<any>;

    constructor(private http: HttpClient, private tradesService: TradesService, private router: Router) {
       
        this.onTradesClick();

        this.tradesArray = [];
        this.formatedData = [];
    };

    ngOnInit() {
    }

    formatData(data: any[]){


        data.forEach(element => {
            
            let time = Helpers.getFormatedDate( element.time_exchange).toString();
            let symbol = element.symbol_id;
            let price = element.price;
            let size = element.size;
            let taker_side = element.taker_side;

            this.formatedData.push({time, symbol, price, size, taker_side});
        });
    }

    onTradesClick() {

        this.tradesService
            .getAllCurrentTrades()
            .subscribe((response)=>{

                this.tradesArray = response;
                
                this.formatData(this.tradesArray);
                this.router.navigate(['/trades']);

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