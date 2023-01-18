import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModFatcaComponent } from './mod-fatca.component';

describe('ModFatcaComponent', () => {
  let component: ModFatcaComponent;
  let fixture: ComponentFixture<ModFatcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModFatcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModFatcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
