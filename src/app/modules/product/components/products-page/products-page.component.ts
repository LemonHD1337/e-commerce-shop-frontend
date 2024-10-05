import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueryParams } from '../../../core/models/params.model';
import { min } from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent implements OnInit {
  category: string = '';
  isDescending: string = '';
  sortBy: string = '';
  dressStyle: string = '';
  size: string = '';
  minPrice: number = 0;
  maxPrice: number = 2000;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: QueryParams) => {
      if (params.category !== undefined) {
        this.category = params.category;
        this.handleAddActive(this.category, 'active');
      }
      if (params.isDescending !== undefined) {
        this.isDescending = params.isDescending;
      }
      if (params.sortBy !== undefined) {
        this.sortBy = params.sortBy;
      }
      if (params.dressStyle !== undefined) {
        this.dressStyle = params.dressStyle;
        this.handleAddActive(this.dressStyle, 'active');
      }
    });
  }

  handleAddActive(id: string, styleClass: string): void {
    const ele = document.getElementById(id);
    if (ele) {
      ele.classList.add(styleClass);
    }
  }

  handleRemoveActive(id: string, styleClass: string): void {
    const ele = document.getElementById(id);
    if (ele) {
      ele.classList.remove(styleClass);
    }
  }

  handleChangeCategory(event: Event) {
    this.handleRemoveActive(this.category, 'active');
    const element = event.target as HTMLParagraphElement;
    let value = element.getAttribute('id');
    if (value) {
      this.category = value;
    }
    this.handleAddActive(this.category, 'active');
  }

  handleChangeStyle(event: Event) {
    this.handleRemoveActive(this.dressStyle, 'active');
    const element = event.target as HTMLParagraphElement;
    let value = element.getAttribute('id');
    if (value) {
      this.dressStyle = value;
    }
    this.handleAddActive(this.dressStyle, 'active');
  }

  handleChangeSize(event: Event) {
    this.handleRemoveActive(this.size, 'active-size-item');
    const element = event.target as HTMLParagraphElement;
    let value = element.getAttribute('id');
    if (value) {
      this.size = value;
    }
    this.handleAddActive(this.size, 'active-size-item');
  }

  handleChangePrice(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(input);
    if (input.name === 'min') {
      this.minPrice = input.valueAsNumber;
    }
    if (input.name === 'max') {
      this.maxPrice = input.valueAsNumber;
    }
  }

  protected readonly min = min;
}
