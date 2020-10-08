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
  displayProducts : Product[]

  constructor(private httpService : HttpServiceService) { }

  ngOnInit() {
    this.retrieveData();
  }

  retrieveData() : void{
    this.httpService.getProductData().subscribe((data : Product[]) => {
      console.log(data);
      this.products = data;
      this.displayProducts = data;
    })
  }

  onFilteredData(event : Product[]) : void{
    this.displayProducts = event;
  }

}