import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { ReportsAndStatisticsComponent } from './reports-and-statistics/reports-and-statistics.component';
import { GradeManagementComponent } from './grade-management/grade-management.component';
import { ProfessorManagementComponent } from './professor-management/professor-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcademicEventsComponent } from './academic-events/academic-events.component';
import { AcademicPlanningComponent } from './academic-planning/academic-planning.component';
import { GestionDocumentosComponent } from './gestion-documentos/gestion-documentos.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Ruta predeterminada redirige a /login
  { path :'register', component: RegisterComponent },
  { path :'login', component : LoginComponent},
  { path :'student-management', component : StudentManagementComponent},
  { path :'reports-and-statistics', component : ReportsAndStatisticsComponent},
  { path :'grade-management', component : GradeManagementComponent},
  { path :'professor-management', component : ProfessorManagementComponent},
  { path :'grade-management', component : GradeManagementComponent},
  { path :'dashboard', component : DashboardComponent},
  { path :'academic-planning', component : AcademicPlanningComponent},
  { path :'academic-events', component : AcademicEventsComponent},
  {path: 'gestion-documentos', component: GestionDocumentosComponent}











];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
