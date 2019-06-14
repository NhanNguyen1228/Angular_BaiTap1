import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1BestProductsComponent } from './baitap1-best-products.component';

describe('Baitap1BestProductsComponent', () => {
  let component: Baitap1BestProductsComponent;
  let fixture: ComponentFixture<Baitap1BestProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1BestProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1BestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
