import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFatcaComponent } from './create-fatca.component';

describe('CreateFatcaComponent', () => {
  let component: CreateFatcaComponent;
  let fixture: ComponentFixture<CreateFatcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFatcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFatcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
