import { stringify } from "@angular/compiler/src/util";

export class ExchangeRates {

     time: Date;
     rate: Number;
     asset_id_quote: string;
     src_side_base: any[];
     
    constructor() {
        
        this.time = new Date();
        this.rate = 0.0;
        this.asset_id_quote = "";
        this.src_side_base= [];
    }
}