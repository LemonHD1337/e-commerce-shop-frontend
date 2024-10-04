import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [CommonModule, ProductRoutingModule, MaterialModule],
  exports: [ProductsPageComponent]
})
export class ProductModule {}
