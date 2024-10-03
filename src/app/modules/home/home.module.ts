import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BanerComponent } from './components/baner/baner.component';
import { BrandSliderComponent } from './components/brand-slider/brand-slider.component';
import { StyleSectionComponent } from './components/style-section/style-section.component';

@NgModule({
  declarations: [HomeComponent, BanerComponent, BrandSliderComponent, StyleSectionComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent]
})
export class HomeModule {}
