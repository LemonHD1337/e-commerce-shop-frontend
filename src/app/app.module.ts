import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CoreModule } from './modules/core/core.module';
import { HomeModule } from './modules/home/home.module';
import { ProductModule } from './modules/product/product.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HomeModule, ProductModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {}
