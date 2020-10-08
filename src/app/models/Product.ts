export class Product{
  Title: string;
  Description: string;
  Price: number;

  constructor(title: string, description: string, price: number){
    this.Title = title;
    this.Description = description;
    this.Price = price;
  }
}