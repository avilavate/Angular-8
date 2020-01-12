import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product-service';


@Component({
  selector: 'pm-poducts',
  templateUrl:"./product-list.component.html",
  styleUrls:["./product-list.component.css"]
  })
export class ProductListComponent implements OnInit{
 
    ngOnInit(): void {
       console.log("Product Component Init");
       this.productService.getProducts().subscribe(
         products=>{this.products=products;  this.filteredProducts=this.products;},
        error=>console.log(error)
        )
      
    }

    constructor(productService:ProductService){
        this.productService=productService;
    }

    pageTitle:string="Product List";
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=true;
    productService:ProductService;

    _filterBy:string='';
    get filterBy():string{
        return this._filterBy;
    }
    set filterBy(value:string){
        this._filterBy=value;
        this.filteredProducts=this._filterBy!==''?this.performFilter(this.filterBy):this.products;
    }
    filteredProducts:IProduct[];
    toggleImageShow=()=>{
        this.showImage===true?this.showImage=false:this.showImage=true;
    }
    performFilter(filterBy:string): IProduct[] {
        console.log("called");
        let result= this.products.filter(p=>{
            return p.productName.includes(filterBy);
        });
        console.log(result);
        return result;
    }

    updateHeader(message:string):void{
      this.pageTitle=this.pageTitle+ " "+message;
    }
   

    products:IProduct[];

}
