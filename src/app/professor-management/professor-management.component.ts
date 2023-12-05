import { Component } from '@angular/core';

@Component({
  selector: 'app-professor-management',
  templateUrl: './professor-management.component.html',
  styleUrls: ['./professor-management.component.css'],
})
export class ProfessorManagementComponent {
  teachers: any[] = [];
  newTeacher: any = {};
  selectedTeacher: any;

  constructor() {
    this.loadTeachersFromLocalStorage();
  }

  showTeacherDetails(index: number) {
    this.selectedTeacher = this.teachers[index];
  }

  deleteTeacher(index: number) {
    this.teachers.splice(index, 1);
    this.saveTeachersToLocalStorage();
  }

  addTeacher() {
    this.teachers.push({ ...this.newTeacher });
    this.newTeacher = {};
    this.saveTeachersToLocalStorage();
    this.loadTeachersFromLocalStorage(); // Actualiza la lista después de agregar un nuevo profesor
  }

  editTeacherDetails() {
    // Implementa la lógica para editar detalles del profesor
  }

  private saveTeachersToLocalStorage() {
    localStorage.setItem('teachers', JSON.stringify(this.teachers));
  }

  private loadTeachersFromLocalStorage() {
    const storedTeachers = localStorage.getItem('teachers');
    if (storedTeachers) {
      this.teachers = JSON.parse(storedTeachers);
    }
  }
}






