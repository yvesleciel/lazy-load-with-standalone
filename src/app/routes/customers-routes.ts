import {Routes} from "@angular/router";
import {ProductsComponent} from "../modules/customers/products/products.component";
import {ProductDetailComponent} from "../modules/customers/product-detail/product-detail.component";


export default [
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'product-detail/:id',
    component:ProductDetailComponent
  },
  {
    path:'',
    redirectTo:'products', pathMatch:'full'
  }
] as Routes
