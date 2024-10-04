import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueryParams } from '../../../core/models/params.model';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: QueryParams) => {
      if (params.category !== undefined) {
        this.category = params.category;
        this.handleAddActive(this.category);
      }
      if (params.isDescending !== undefined) {
        this.isDescending = params.isDescending;
      }
      if (params.sortBy !== undefined) {
        this.sortBy = params.sortBy;
      }
      if (params.dressStyle !== undefined) {
        this.dressStyle = params.dressStyle;
        this.handleAddActive(this.dressStyle);
      }
    });
  }

  handleAddActive(id: string): void {
    const ele = document.getElementById(id);
    if (ele) {
      ele.classList.add('active');
    }
  }

  handleRemoveActive(id: string): void {
    const ele = document.getElementById(id);
    if (ele) {
      ele.classList.remove('active');
    }
  }

  handleChangeCategory(event: Event) {
    this.handleRemoveActive(this.category);
    const element = event.target as HTMLParagraphElement;
    let value = element.getAttribute('id');
    if (value) {
      this.category = value;
    }
    this.handleAddActive(this.category);
  }

  handleChangeStyle(event: Event) {
    this.handleRemoveActive(this.dressStyle);
    const element = event.target as HTMLParagraphElement;
    let value = element.getAttribute('id');
    if (value) {
      this.dressStyle = value;
    }
    this.handleAddActive(this.dressStyle);
  }
}
