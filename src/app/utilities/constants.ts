export class Constants {

    public static status = {

        NOT_FOUND: 404,
        OK: 200,
        INTERNAL_SERVER: 500,
        UNAUTHORIZED: 401
    }

    public static messages = {

        NO_ACCOUNT_FOUND: "There is no account with these credentials!",
        SOMETHING_IS_WRONG: "Something is wrong! Please try again later!",
        REGISTERED_SUCCESSFULLY: "User registered successfully. Login to countinue!",
        PROFILE_SUCCESSFULLY: "Your profile is updated successfully!",
        API_KEY_SUCCESSFULLY: "The api key is updated successfully!",
        USER_DELETION_SUCCESSFULLY: "The user is deleted successfully!"
    }

    public static metaData = {
       data: [
            {
              "symbol_id": "KRAKENFTS_PERP_BTC_USD",
              "exchange_id": "KRAKENFTS",
              "symbol_type": "PERPETUAL",
              "asset_id_base": "BTC",
              "asset_id_quote": "USD",
              "asset_id_unit": "USD",
              "future_contract_unit": 1.000000000,
              "future_contract_unit_asset": "USD",
              "data_start": "2019-10-30",
              "data_end": "2021-03-03",
              "data_quote_start": "2019-10-30T16:53:10.3262317Z",
              "data_quote_end": "2021-03-03T13:51:45.6970000Z",
              "data_orderbook_start": "2019-10-30T16:53:10.3262317Z",
              "data_orderbook_end": "2020-08-05T14:37:32.0080000Z",
              "data_trade_start": "2019-10-30T16:38:52.1620000Z",
              "data_trade_end": "2021-03-03T13:46:25.7810000Z",
              "volume_1hrs": 22897091.000000000,
              "volume_1hrs_usd": 22897091.00,
              "volume_1day": 459390289.000000000,
              "volume_1day_usd": 459390289.00,
              "volume_1mth": 12875674995.000000000,
              "volume_1mth_usd": 12875674995.00,
              "price": 51266,
              "symbol_id_exchange": "pi_xbtusd",
              "asset_id_base_exchange": "XBT",
              "asset_id_quote_exchange": "USD",
              "price_precision": 0.100000000,
              "size_precision": 1.000000000
            },
            {
              "symbol_id": "POLONIEX_SPOT_LTC_USDC",
              "exchange_id": "POLONIEX",
              "symbol_type": "SPOT",
              "asset_id_base": "LTC",
              "asset_id_quote": "USDC",
              "data_start": "2018-11-20",
              "data_end": "2021-03-01",
              "data_quote_start": "2018-11-20T15:24:58.4128803Z",
              "data_quote_end": "2021-03-01T16:07:09.3475456Z",
              "data_orderbook_start": "2018-11-20T15:24:58.4128803Z",
              "data_orderbook_end": "2020-08-05T14:37:20.2695780Z",
              "data_trade_start": "2018-11-20T15:25:38.0000000Z",
              "data_trade_end": "2021-03-01T16:03:18.0000000Z",
              "volume_1hrs": 51.686458990,
              "volume_1hrs_usd": 9036.44,
              "volume_1day": 465.568863000,
              "volume_1day_usd": 81396.28,
              "volume_1mth": 22528.276384950,
              "volume_1mth_usd": 3938661.00,
              "symbol_id_exchange": "USDC_LTC",
              "asset_id_base_exchange": "LTC",
              "asset_id_quote_exchange": "USDC",
              "price_precision": 0.000000010,
              "size_precision": 0.000000010
            }
          ]
    }
}