import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModAddressComponent } from './mod-address.component';

describe('ModAddressComponent', () => {
  let component: ModAddressComponent;
  let fixture: ComponentFixture<ModAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
