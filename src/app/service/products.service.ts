import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'http://localhost:4201';
  //per chiamare la lista pordotti, la chiamata con interpolazione di stringhe sarà '${this.baseUrl}/products'
  //per chiamare un prodotto in dettaglio: '${this.baseUrl}/products/${id}'
  constructor(private http: HttpClient) {}
  getProducts(){
    return this.http.get<Product[]>(`${this.baseUrl}/products`)
  }
  getDettagliProdotto(id:number){
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`)
  }

}