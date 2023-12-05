import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicEventsComponent } from './academic-events.component';

describe('AcademicEventsComponent', () => {
  let component: AcademicEventsComponent;
  let fixture: ComponentFixture<AcademicEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicEventsComponent]
    });
    fixture = TestBed.createComponent(AcademicEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
