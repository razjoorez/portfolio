import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { IAddress } from '../models/iaddress';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class AddressLookUpService {
  
  constructor(private http: HttpClient) { }
  apiKey= 'zR3470daaUSOwd_hvvd-ag28015';
  adminKey = 'XvpW1fBcPEecmwLwqahmAA28015';
  addressUrl = 'https://api.getAddress.io/find/w148jb?api-key=' + this.apiKey;
  
  // $address: Observable<IAddress[]>;
  // tslint:disable-next-line: no-unused-expression
  // tslint:disable-next-line: align
  // getAddress(): Observable<this.$address> {
  //   return this.http.get<$address[]>(this.addressUrl);
  // }
  getAddress(postCode: string): Observable<IAddress[]> {
    return this.http.get<IAddress[]>(this.addressUrl).pipe(
      catchError(this.handleError<IAddress[]>('getAddress', [])),
    );
  }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
