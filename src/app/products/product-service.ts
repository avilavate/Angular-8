import { Injectable } from '@angular/core';
import { IProduct } from './product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap, catchError} from 'rxjs/operators'

@Injectable({
    providedIn:'root'
})
export class ProductService {
     
    private serviceUrl:string='api/products/products.json';
    constructor(private http: HttpClient) { }

    getProducts = (): Observable<IProduct[]> => {
        return this.http.get<IProduct[]>(this.serviceUrl).pipe(
            tap(json=>console.log(`All: " ${JSON.stringify(json)}`)),
            catchError(this.handleError)
            );
    }
    handleError(handleError: any): import("rxjs").OperatorFunction<IProduct[], any> {
        throw new Error(handleError.message);
    }
}