import { ProductItemComponent } from './product-item/product-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShopComponent,
    ProductItemComponent
  ]
})
export class ShopModule { }
