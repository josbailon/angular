// grade-management.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-grade-management',
  templateUrl: './grade-management.component.html',
  styleUrls: ['./grade-management.component.css']
})
export class GradeManagementComponent {
  students: any[] = [];
  newStudent: any = {};

  addGrade(): void {
    if (this.newStudent.name && this.newStudent.grade) {
      this.students.push({ name: this.newStudent.name, grade: this.newStudent.grade });
      this.newStudent = {};
    }
  }

  deleteGrade(index: number): void {
    this.students.splice(index, 1);
  }
}
