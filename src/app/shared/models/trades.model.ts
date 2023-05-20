import { stringify } from "@angular/compiler/src/util";

export class Trades {

     symbol_id: String;
     time: Date;
     price: Number;
     size: Number;
     taker_side: String;
     
    constructor() {
        
        this.symbol_id = "";
        this.time = new Date();
        this.price = 0;
        this.taker_side = "";
        this.size = 0;
    }
}