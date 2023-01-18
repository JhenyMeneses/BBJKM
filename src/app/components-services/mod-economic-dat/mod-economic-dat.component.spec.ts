import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModEconomicDatComponent } from './mod-economic-dat.component';

describe('ModEconomicDatComponent', () => {
  let component: ModEconomicDatComponent;
  let fixture: ComponentFixture<ModEconomicDatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModEconomicDatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModEconomicDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
