// student-management.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css'],
})
export class StudentManagementComponent implements OnInit {
  estudiantes: any[] = [];
  nuevoEstudiante: any = {};
  editarEstudianteIndex: number | null = null;

  ngOnInit(): void {
    const storedEstudiantes = localStorage.getItem('estudiantes');
    this.estudiantes = storedEstudiantes ? JSON.parse(storedEstudiantes) : [];
  }

  agregarEstudiante(): void {
    this.estudiantes.push({ ...this.nuevoEstudiante });
    this.nuevoEstudiante = {};
    this.actualizarLocalStorage();
  }

  eliminarEstudiante(index: number): void {
    this.estudiantes.splice(index, 1);
    this.actualizarLocalStorage();
  }

  editarEstudiante(index: number): void {
    this.editarEstudianteIndex = index;
  }

  guardarEdicion(): void {
    if (this.editarEstudianteIndex !== null) {
      // Actualizar el estudiante en el arreglo
      this.estudiantes[this.editarEstudianteIndex] = { ...this.estudiantes[this.editarEstudianteIndex] };

      // Guardar en el localStorage
      this.actualizarLocalStorage();

      // Resetear el índice de edición
      this.editarEstudianteIndex = null;
    }
  }

  cancelarEdicion(): void {
    this.editarEstudianteIndex = null;
  }

  private actualizarLocalStorage(): void {
    localStorage.setItem('estudiantes', JSON.stringify(this.estudiantes));
  }
}

