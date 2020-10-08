import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { HttpServiceService } from '../../services/http-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[]

  constructor(private httpService : HttpServiceService) { }

  ngOnInit() {
  }

  retrieveData() : void{
    this.httpService.getProductData().subscribe((data : Product[]) => {
      console.log(data);
      this.products = data;
    })
  }

}