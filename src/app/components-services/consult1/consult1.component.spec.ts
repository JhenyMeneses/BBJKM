import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consult1Component } from './consult1.component';

describe('Consult1Component', () => {
  let component: Consult1Component;
  let fixture: ComponentFixture<Consult1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consult1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consult1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
