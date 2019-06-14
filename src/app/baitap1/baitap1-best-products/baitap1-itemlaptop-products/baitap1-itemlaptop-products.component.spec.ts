import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1ItemlaptopProductsComponent } from './baitap1-itemlaptop-products.component';

describe('Baitap1ItemlaptopProductsComponent', () => {
  let component: Baitap1ItemlaptopProductsComponent;
  let fixture: ComponentFixture<Baitap1ItemlaptopProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1ItemlaptopProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1ItemlaptopProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
