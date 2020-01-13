import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';
import { ProductService } from '../product-service';
import { ConvertToSpacePipe } from 'src/app/shared/convert-to-space.pipe';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private productService:ProductService, private router:Router) {}
  product:IProduct;
  pageTitle:string="Product Details";
  ngOnInit() {
    let id=+this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(products=>{
    this.product=products.filter(p=>{return p.productId===id})[0];
  });
}
onBack(){
this.router.navigate(['/products']);
}
}
