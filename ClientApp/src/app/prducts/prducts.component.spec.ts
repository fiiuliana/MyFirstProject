import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductsComponent } from './prducts.component';

describe('PrductsComponent', () => {
  let component: PrductsComponent;
  let fixture: ComponentFixture<PrductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
