import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_PRODUCTS } from 'src/app/graphql/graphql.queries';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_PRODUCTS,
      })
      .valueChanges.subscribe((result: any) => {
        this.products = result?.data?.products;
        this.loading = result?.loading;
        this.error = result?.error;
      });
  }
}
