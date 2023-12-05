import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicPlanningComponent } from './academic-planning.component';

describe('AcademicPlanningComponent', () => {
  let component: AcademicPlanningComponent;
  let fixture: ComponentFixture<AcademicPlanningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicPlanningComponent]
    });
    fixture = TestBed.createComponent(AcademicPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
