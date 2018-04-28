import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './order'
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CheckoutService {

private checkoutUrl: string;

private host = 'localhost';

private port = 9999;

private basePath = 'api/v1/';

private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

  constructor(private http: HttpClient) {
    this.checkoutUrl = `http://${this.host}:${this.port}/${this.basePath}`;
   }

  // Checkout order.
  checkoutOrder(order: Order[]): Observable<Order[]> {
    return this.http.put<Order[]>(this.checkoutUrl+'checkout', JSON.stringify(order), this.httpOptions)
    .pipe(
      catchError<Order[], Order[]>(this.handleError('checkoutOrder', []))
    );
  }

  // Error handler.
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
