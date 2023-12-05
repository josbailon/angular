// dashboard.component.ts

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  // Datos simulados para las tarjetas de estadísticas
  stats = [
    { label: 'Total de Estudiantes', value: 1200, iconClass: 'fas fa-graduation-cap' },
    { label: 'Total de Profesores', value: 80, iconClass: 'fas fa-chalkboard-teacher' },
    { label: 'Total de Cursos', value: 50, iconClass: 'fas fa-book' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Lógica de inicialización previa al renderizado del gráfico
  }

  ngAfterViewInit(): void {
    // Renderizar el gráfico después de que la vista se haya inicializado
    this.renderSemesterChart();
  }

  private renderSemesterChart(): void {
    const ctx = document.getElementById('semesterChart') as HTMLCanvasElement;
    const semesterChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
          label: 'Número de Estudiantes',
          data: [50, 120, 80, 200, 100, 150],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
