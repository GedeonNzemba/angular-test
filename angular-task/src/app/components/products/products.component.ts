import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_PRICE_LISTS } from 'src/app/graphql/graphql.queries';
import { ProductWithPrice } from 'src/utility/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  data: ProductWithPrice[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_PRICE_LISTS,
      })
      .valueChanges.subscribe((result: any) => {
        let data = result?.data?.getAllData;
        const filteredResult = data.filter(
          (item: ProductWithPrice) => item.price >= 1
        );

        this.data = filteredResult;
        this.loading = result?.loading;
        this.error = result?.error;
      });
  }
}
