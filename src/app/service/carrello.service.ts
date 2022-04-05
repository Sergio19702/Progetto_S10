import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CarrelloService {
  products: Product[] = [];

  sub = new Subject<number>();
  empty = new Subject<Product[]>();
  counter = 0;

  constructor() {}

  addToCart(oggetto: Product) {
    this.products.push(oggetto);
  }
  getItems() {
    return this.products;
  }
  clearCart() {
    this.products.length = 0;
    this.counter = 0;
    this.sub.next(this.counter);
    this.empty.next(this.products);
  }
  conta() {
    this.counter++;
    this.sub.next(this.counter);
  }

  remove(id: number) {
    this.products.splice(id, 1);
    this.counter--;
    this.sub.next(this.counter);
  }
}