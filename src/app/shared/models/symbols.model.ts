export class Symbols {

    symbol_id: String;
    exchange_id: String;
    asset_id_base: String;
    asset_id_quote: String;
    asset_id_unit: String;
    future_contract_unit: String;
    price: String;
    asset_id_base_exchange: String;
    asset_id_quote_exchange: String;


    constructor(){

        this.symbol_id = "";
        this.exchange_id = "";
        this.asset_id_base = "";
        this.asset_id_quote = "";
        this.asset_id_unit = "";
        this.future_contract_unit = "";
        this.price = "";
        this.asset_id_base_exchange = "";
        this.asset_id_quote_exchange = "";
    }
}