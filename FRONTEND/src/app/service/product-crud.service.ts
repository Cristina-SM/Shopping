import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


export interface Products {
  id: number;
  name: string;
  lot: number; 
  image: string; 
}

@Injectable({
  providedIn: 'root'
})

export class ProductsCrudService {
  public image:string;
  endpoint = 'http://localhost:8080/products';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' })
  };

  constructor(
    private httpClient: HttpClient
   
    ) { }
  
  imageProducts(savedFile: string){
    this.image = savedFile;
  }

  createProducts(product: Products): Observable<Products> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", product.name);
    bodyEncoded.append("lot", product.lot.toString());
    bodyEncoded.append("image", this.image);
    const body = bodyEncoded.toString();
    return this.httpClient.post<Products>(this.endpoint, body, this.httpOptions)
      .pipe(
        catchError(this.handleError<Products>('Error occured'))
      );
  }

  getProduct(id): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Products fetched: ${id}`)),
        catchError(this.handleError<Products[]>(`Get products id=${id}`))
      );
  }

  getProducts(): Observable<Products[]> {
  
    return this.httpClient.get<Products[]>(this.endpoint)
      .pipe(
        tap(users => console.log('Products retrieved!')),
        catchError(this.handleError<Products[]>('Get product', []))
      );
  }

  updateProducts(id, product: Products): Observable<any> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", product.name);
    bodyEncoded.append("lot", product.lot.toString());
    bodyEncoded.append("image", this.image);
    const body = bodyEncoded.toString();
    return this.httpClient.put(this.endpoint + '/' + id, body, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Product updated: ${id}`)),
        catchError(this.handleError<Products[]>('Update user'))
      );
  }

  deleteProducts(id): Observable<Products[]> {
    return this.httpClient.delete<Products[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Product deleted: ${id}`)),
        catchError(this.handleError<Products[]>('Delete user'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}