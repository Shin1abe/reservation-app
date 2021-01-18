import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
//import { products } from '../../products';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //this.product = this.productService.getProductById(params.get('productId'))
      //this.product = products[+params.get('productId')];
      //window.alert(this.product.name);

      const productObservable = this.productService.getProductById(params.get('productId'))
      productObservable.subscribe(
        (data) => {
          this.product = data
          //console.log('次のデータが出力されました：' + data)
          //debugger
        },
        (err) => { console.error('次のエラーが出力されました：' + err) },
        () => { console.log('完了しました!') }
      )
  


    });
  }
}
