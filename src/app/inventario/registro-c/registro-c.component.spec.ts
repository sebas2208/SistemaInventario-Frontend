import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCComponent } from './registro-c.component';

describe('RegistroCComponent', () => {
  let component: RegistroCComponent;
  let fixture: ComponentFixture<RegistroCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
