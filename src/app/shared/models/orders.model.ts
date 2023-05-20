import { stringify } from "@angular/compiler/src/util";

export class Orders {

     time: Date;
     asks: Number;
     bid: Number;
     
    constructor() {
        
        this.time = new Date();
        this.asks = 0;
        this.bid = 0;
    }
}