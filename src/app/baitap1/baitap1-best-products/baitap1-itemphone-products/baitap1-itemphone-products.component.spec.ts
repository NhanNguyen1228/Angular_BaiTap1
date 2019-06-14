import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1ItemphoneProductsComponent } from './baitap1-itemphone-products.component';

describe('Baitap1ItemphoneProductsComponent', () => {
  let component: Baitap1ItemphoneProductsComponent;
  let fixture: ComponentFixture<Baitap1ItemphoneProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1ItemphoneProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1ItemphoneProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
