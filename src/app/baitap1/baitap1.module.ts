import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap1Component } from './baitap1.component';
import { Baitap1HeaderComponent } from './baitap1-header/baitap1-header.component';
import { Baitap1CarouselComponent } from './baitap1-carousel/baitap1-carousel.component';
import { Baitap1BestProductsComponent } from './baitap1-best-products/baitap1-best-products.component';
import { Baitap1PromotionComponent } from './baitap1-promotion/baitap1-promotion.component';
import { Baitap1ItemlaptopProductsComponent } from './baitap1-best-products/baitap1-itemlaptop-products/baitap1-itemlaptop-products.component';
import { Baitap1ItemphoneProductsComponent } from './baitap1-best-products/baitap1-itemphone-products/baitap1-itemphone-products.component';
import { Baitap1ItemPromotionComponent } from './baitap1-promotion/baitap1-item-promotion/baitap1-item-promotion.component';


@NgModule({
  declarations: [Baitap1Component, Baitap1HeaderComponent, Baitap1CarouselComponent, Baitap1BestProductsComponent, Baitap1PromotionComponent, Baitap1ItemlaptopProductsComponent, Baitap1ItemphoneProductsComponent, Baitap1ItemPromotionComponent],
  
  exports: [Baitap1Component, Baitap1HeaderComponent, Baitap1CarouselComponent, Baitap1BestProductsComponent, Baitap1PromotionComponent, Baitap1ItemlaptopProductsComponent],
  
  imports: [
    CommonModule
  ]
})
export class Baitap1Module { }
