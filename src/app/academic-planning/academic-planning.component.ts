// academic-planning.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-academic-planning',
  templateUrl: './academic-planning.component.html',
  styleUrls: ['./academic-planning.component.css']
})
export class AcademicPlanningComponent implements OnInit {
  courseForm: FormGroup;
  plannedCourses: any[] = [];
  professors: string[] = ["Adriana", "Willian", "Robert"];

  // Variable para almacenar el índice del curso en edición
  editingIndex: number | null = null;

  constructor(private formBuilder: FormBuilder) {
    this.courseForm = this.formBuilder.group({
      courseName: ['', [Validators.required, Validators.minLength(3)]],
      professor: ['', Validators.required],
      schedule: ['', [Validators.required, Validators.pattern(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)]]
    });
  }

  ngOnInit(): void {}

  submitCourseForm(): void {
    if (this.courseForm.valid) {
      const newCourse = {
        courseName: this.courseForm.value.courseName,
        professor: this.courseForm.value.professor,
        schedule: this.courseForm.value.schedule
      };

      // Si estamos editando, reemplazamos el curso en la lista
      if (this.editingIndex !== null) {
        this.plannedCourses[this.editingIndex] = newCourse;
        this.editingIndex = null; // Dejamos de editar
      } else {
        this.plannedCourses.push(newCourse);
      }

      this.courseForm.reset();
    }
  }

  editCourse(course: any, index: number): void {
    // Iniciamos la edición del curso
    this.editingIndex = index;

    // Seteamos los valores actuales del curso en el formulario
    this.courseForm.patchValue({
      courseName: course.courseName,
      professor: course.professor,
      schedule: course.schedule
    });
  }

  deleteCourse(course: any): void {
    const index = this.plannedCourses.indexOf(course);
    if (index !== -1) {
      this.plannedCourses.splice(index, 1);

      // Si estamos editando y borramos el curso en edición, dejamos de editar
      if (this.editingIndex === index) {
        this.editingIndex = null;
        this.courseForm.reset();
      }
    }
  }
}



