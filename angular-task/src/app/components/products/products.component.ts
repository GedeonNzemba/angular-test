import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_PRICES, GET_PRODUCTS } from 'src/app/graphql/graphql.queries';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  price_lists: any[] = [];
  products_loading = true;
  products_error: any;
  prices_loading = true;
  prices_error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_PRODUCTS,
      })
      .valueChanges.subscribe((result: any) => {
        this.products = result?.data?.getAllProducts;
        this.products_loading = result?.products_loading;
        this.products_error = result?.products_error;
      });

    this.apollo
      .watchQuery({
        query: GET_PRICES,
      })
      .valueChanges.subscribe((result: any) => {
        this.price_lists = result?.data?.getAllPrices;
        this.prices_loading = result?.prices_loading;
        this.prices_error = result?.prices_error;
      });
  }
}
