import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroprocesosComponent } from './macroprocesos.component';

describe('MacroprocesosComponent', () => {
  let component: MacroprocesosComponent;
  let fixture: ComponentFixture<MacroprocesosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MacroprocesosComponent]
    });
    fixture = TestBed.createComponent(MacroprocesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
