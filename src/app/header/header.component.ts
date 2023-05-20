import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExchangeRatesComponent } from '../exchangeRates/exchangeRates.component';
import { OrdersComponent } from '../orders/orders.component';
import { TradesComponent } from '../trades/trades.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    styles: ['a { color: white; }']
})

export class HeaderComponent implements OnInit {
    
    isAdmin: number;

    constructor() {

        this.isAdmin = Number(localStorage.getItem("isAdmin"));
    };

    ngOnInit() {

    }

    onLogoutClick() {
        localStorage.clear()
    }
}