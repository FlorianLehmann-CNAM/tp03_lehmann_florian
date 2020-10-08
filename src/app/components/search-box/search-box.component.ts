import { Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Input() dataToFilter : Product[];
  @Output() onFilteredData : EventEmitter<Product[]>

  constructor() {
    this.onFilteredData = new EventEmitter<Product[]>();

  }

  ngOnInit() {
  }

  onKey(event : any) : void{
    let newData : Product[] = this.dataToFilter.filter((p) => p.title.includes(event.target.value));
    this.onFilteredData.emit(newData);
  }

}