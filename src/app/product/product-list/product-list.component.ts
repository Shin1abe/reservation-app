import { Component, OnInit } from '@angular/core';
//import { error } from 'console';
//import { products } from 'src/app/products';
//import { products } from '../../products';
import { ProductService } from '../shared/product.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    //this.products = this.productService.getProducts()

    const productObservable = this.productService.getProducts()
    productObservable.subscribe(
      (data) => {
        this.products = data
        //console.log('次のデータが出力されました：' + data)
        //debugger
      },
      (err) => { console.error('次のエラーが出力されました：' + err) },
      () => { console.log('完了しました!') }
    )

    //this.products = products;
    //window.alert("product-list.component.ts")

    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.complete();
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    // debugger
    // console.log('just before subscribe');
    // debugger
    // observable.subscribe({
    //   next(x) { console.log('got value ' + x); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });
    // console.log('just after subscribe');
  }

}
