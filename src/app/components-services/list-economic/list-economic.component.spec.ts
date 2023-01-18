import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEconomicComponent } from './list-economic.component';

describe('ListEconomicComponent', () => {
  let component: ListEconomicComponent;
  let fixture: ComponentFixture<ListEconomicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEconomicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEconomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
