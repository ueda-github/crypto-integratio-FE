import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BaseService } from '../base.service';
import { Symbols } from '../shared/models/symbols.model';

@Injectable({
    providedIn: 'root'
})

export class SymbolsService extends BaseService {

    constructor(private http: HttpClient) {
        super('symbols');
    };

    getAllSymbols(){

        return this.http.get<any[]>(this.getEndPointValue(), this.setUpAuthHeaders());
    }
    
}