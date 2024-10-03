import { Component } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductsApiService } from '../../../core/services/products-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  popularProducts: Product[] = [];
  newProducts: Product[] = [];

  constructor(private service: ProductsApiService) {}

  ngOnInit() {
    this.service.getNewProducts().subscribe({
      next: data => {
        this.newProducts = [...data];
      }
    });

    this.service.getPopularProducts().subscribe({
      next: data => {
        this.popularProducts = [...data];
      }
    });
  }
}
