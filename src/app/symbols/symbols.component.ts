import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Constants } from '../utilities/constants';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { User } from '../shared/models/user.model';
import { Trades } from '../shared/models/trades.model';
import { Helpers } from '../utilities/Helpers';
import { SymbolsService } from './symbols.service';

@Component({
    selector: 'app-symbols',
    templateUrl: './symbols.component.html',
    styleUrls: ['./symbols.component.css'],
    styles: [
      //  'h3 {color: purple}' //inline style
    ]
})

export class SymbolsComponent implements OnInit {

    trades = new Trades();
    symbolsArray : Array<any>;
    formatedData: Array<any>;

    constructor(private http: HttpClient, private symbolsService: SymbolsService, private router: Router) {
       
        this.onSymbolsClick();

        this.symbolsArray = [];
        this.formatedData = Constants.metaData.data;
    };

    ngOnInit() {
    }

    formatData(data: any[]){


        data.forEach(element => {
            
            let symbol_id = element.symbol_id;
            let exchange_id = element.exchange_id;
            let asset_id_base = element.asset_id_base;
            let asset_id_quote = element.asset_id_quote;
            let asset_id_unit = element.asset_id_unit;
            let future_contract_unit = element.future_contract_unit;
            let price =  element.price;
            let asset_id_base_exchange = element.asset_id_base_exchange;
            let asset_id_quote_exchange = element.asset_id_quote_exchange;

            this.formatedData.push({symbol_id, exchange_id, asset_id_base, asset_id_quote,
                asset_id_unit, future_contract_unit, price,  asset_id_base_exchange, asset_id_quote_exchange });
        });
    }

    onSymbolsClick() {

        this.symbolsService
            .getAllSymbols()
            .subscribe((response)=>{

                this.symbolsArray = response;
                
                this.formatData(this.symbolsArray);
                this.router.navigate(['/symbols']);

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