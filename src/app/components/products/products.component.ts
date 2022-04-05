import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/service/products.service';
import { CarrelloService } from 'src/app/service/carrello.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product !: Product[]| undefined;
  sub!: Subscription;
  constructor(private prodSvc:ProductsService, private carrelloSvc:CarrelloService) { }

  ngOnInit() : void{
  this.sub = this.prodSvc.getProducts().subscribe((list) =>{
    this.product = list;
  })
  }
  aggiungi(prodotto:Product){
    this.carrelloSvc.addToCart(prodotto)
    this.carrelloSvc.conta()
    alert('Hai aggiunto ' + prodotto.name + ' al carrello!')
  }
  ottieniId(prodotto:Product){
    return prodotto.id
  }
}
