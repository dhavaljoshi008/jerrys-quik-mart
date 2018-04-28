import { Injectable } from '@angular/core';
import { Item } from './item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class InventoryService {

  private inventoryUrl: string;

  private host = 'localhost';

  private port = 9999;

  private basePath = 'api/v1/';

  constructor(private http: HttpClient) {
    this.inventoryUrl = `http://${this.host}:${this.port}/${this.basePath}`;
  }

  getAllInventoryItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.inventoryUrl+'/inventory')
    .pipe(
      catchError<Item[], Item[]>(this.handleError('getAllInventoryItems', []))
    )
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
