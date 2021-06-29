import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './_components/nav/nav.component';
import { CategoryComponent } from './_components/category/category.component';
import { ProductComponent } from './_components/product/product.component';
import { CategoryProductsComponent } from './_components/category-products/category-products.component';
import { HomeComponent } from './_components/home/home.component';
import { UrlformatPipe } from './_pipes/urlformat.pipe';
import { ProductDetailComponent } from './_components/product-detail/product-detail.component';

@NgModule({
  declarations: [AppComponent, NavComponent, CategoryComponent, ProductComponent, CategoryProductsComponent, HomeComponent, UrlformatPipe, ProductDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
