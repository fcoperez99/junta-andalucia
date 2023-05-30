import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnalcesComponent } from './enalces.component';

describe('EnalcesComponent', () => {
  let component: EnalcesComponent;
  let fixture: ComponentFixture<EnalcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnalcesComponent]
    });
    fixture = TestBed.createComponent(EnalcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
