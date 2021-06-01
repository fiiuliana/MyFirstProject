import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent {

  public products: Product[];

  constructor(http: HttpClient, @Inject('API_URL') apiUrl: string) {
    http.get<Product[]>(apiUrl + 'products').subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}
