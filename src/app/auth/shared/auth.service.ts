import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()   
export class AuthService{

    constructor(private http: HttpClient) { }

    // getProducts():Observable<any>{
    //     return this.http.get('/api/v1/products/')
    // }

    //  getProductById(productid: String):Observable<any>{
    //     // debugger
    //      return this.http.get('/api/v1/products/' + productid)
    // }

}