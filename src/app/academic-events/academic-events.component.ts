// academic-events.component.ts

import { Component } from '@angular/core';

interface AcademicEvent {
  title: string;
  description: string;
  date: Date;
  registrationClosed: boolean;
  // Agrega otras propiedades necesarias para tu evento
}

@Component({
  selector: 'app-academic-events',
  templateUrl: './academic-events.component.html',
  styleUrls: ['./academic-events.component.css']
})
export class AcademicEventsComponent {
  academicEvents: AcademicEvent[] = [];
  newEvent: AcademicEvent = { title: '', description: '', date: new Date(), registrationClosed: false };

  submitEventForm(): void {
    // Implementa la lógica para manejar la presentación de eventos
    console.log('Evento planificado:', this.newEvent);
    // Agrega la lógica para agregar el nuevo evento a la lista
    this.academicEvents.push({ ...this.newEvent });
    // Restablece el nuevo evento
    this.newEvent = { title: '', description: '', date: new Date(), registrationClosed: false };
  }

  editEvent(selectedEvent: AcademicEvent): void {
    // Implementa la lógica para editar el evento seleccionado
    console.log('Editar evento:', selectedEvent);
  }

  deleteEvent(selectedEvent: AcademicEvent): void {
    // Implementa la lógica para borrar el evento seleccionado
    console.log('Borrar evento:', selectedEvent);
    // Agrega la lógica para eliminar el evento de la lista
    const index = this.academicEvents.indexOf(selectedEvent);
    if (index !== -1) {
      this.academicEvents.splice(index, 1);
    }
  }

  registerForEvent(selectedEvent: AcademicEvent): void {
    // Implementa la lógica para registrar al usuario para el evento
    console.log('Registrarse para el evento:', selectedEvent);
  }
}
