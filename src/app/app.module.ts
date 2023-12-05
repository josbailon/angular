import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { ProfessorManagementComponent } from './professor-management/professor-management.component';
import { AcademicPlanningComponent } from './academic-planning/academic-planning.component';
import { GradeManagementComponent } from './grade-management/grade-management.component';
import { AcademicEventsComponent } from './academic-events/academic-events.component';
import { ReportsAndStatisticsComponent } from './reports-and-statistics/reports-and-statistics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatOptionSelectionChange } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { GestionDocumentosComponent } from './gestion-documentos/gestion-documentos.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    StudentManagementComponent,
    ProfessorManagementComponent,
    AcademicPlanningComponent,
    GradeManagementComponent,
    AcademicEventsComponent,
    ReportsAndStatisticsComponent,
    GestionDocumentosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
