import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultFatcaComponent } from './consult-fatca.component';

describe('ConsultFatcaComponent', () => {
  let component: ConsultFatcaComponent;
  let fixture: ComponentFixture<ConsultFatcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultFatcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultFatcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
