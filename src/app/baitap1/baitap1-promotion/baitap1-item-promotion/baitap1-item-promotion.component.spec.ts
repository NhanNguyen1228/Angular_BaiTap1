import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1ItemPromotionComponent } from './baitap1-item-promotion.component';

describe('Baitap1ItemPromotionComponent', () => {
  let component: Baitap1ItemPromotionComponent;
  let fixture: ComponentFixture<Baitap1ItemPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1ItemPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1ItemPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
