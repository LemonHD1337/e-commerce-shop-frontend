import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { FooterColumnComponent } from './components/footer/footer-column/footer-column.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, FooterColumnComponent],
  exports: [HeaderComponent, FooterColumnComponent, FooterComponent],
  imports: [CommonModule, RouterLink, MaterialModule, HttpClientModule]
})
export class CoreModule {}
