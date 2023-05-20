import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Constants } from '../utilities/constants';
import Swal from 'sweetalert2';
import { NavigationStart, Router } from '@angular/router';
import { ExchangeRatesService } from './exhangeRates.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { ExchangeRates } from '../shared/models/exchangeRates.model';
import { Subscription } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { Helpers } from '../utilities/Helpers';

@Component({
    selector: 'app-exchangeRates',
    templateUrl: './exchangeRates.component.html',
    styleUrls: ['./exchangeRates.component.css'],
    styles: [
        'h3 {color: purple}' //inline style
    ]
})

export class ExchangeRatesComponent implements OnInit  {

    exchangeRates = new ExchangeRates();
    
    exchangeTime: string;

    formatedData: Array<any> 

    constructor(private http: HttpClient, private exchangeRatesService: ExchangeRatesService, private router: Router) {
       
        this.onExchangeRatesClick();
        this.exchangeTime = "";
        this.formatedData = [];
    }

    formatTableData(data: any[]){

        data.forEach(element => {

            let time = Helpers.getFormatedDate((element.time).toString());
            let asset = element.asset;
            let rate = element.rate.toFixed(2)

            this.formatedData.push({time, asset, rate});
        });
    }

     onExchangeRatesClick(){
   
        this.exchangeRatesService
            .getAllCurrentRates()
            .subscribe((response)=>{

            this.exchangeRates = response;
            this.formatTableData(this.exchangeRates.src_side_base);
            this.exchangeTime = Helpers.getFormatedDate((this.exchangeRates.time).toString());
            this.router.navigate(['/exchangeRates']);
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

    ngOnInit(){}
}