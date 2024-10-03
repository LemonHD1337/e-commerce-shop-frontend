import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  constructor(private http: HttpClient) {}

  getNewProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products?isDescending=true&sortBy=DATE&page=1&pageSize=4');
  }

  getPopularProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products?isDescending=true&sortBy=POPULARITY&page=1&pageSize=4');
  }
}
