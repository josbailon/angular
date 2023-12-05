import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-documentos',
  templateUrl: './gestion-documentos.component.html',
  styleUrls: ['./gestion-documentos.component.css'],
})
export class GestionDocumentosComponent {
  documents: any[] = [];
  newDocument: any = { title: '', description: '', file: null };

  constructor() {
    // Recuperar documentos almacenados al inicializar el componente
    this.getStoredDocuments();
  }

  saveDocument(): void {
    // Verificar si se proporcionan título y descripción
    if (!this.newDocument.title || !this.newDocument.description) {
      return;
    }

    // Guardar el nuevo documento en la lista y en localStorage
    this.documents.push({ ...this.newDocument });
    this.updateStoredDocuments();
    
    // Limpiar el formulario para un nuevo documento
    this.newDocument = { title: '', description: '', file: null };
  }

  deleteDocument(index: number): void {
    // Eliminar el documento de la lista y actualizar localStorage
    this.documents.splice(index, 1);
    this.updateStoredDocuments();
  }

  handleFileInput(event: any): void {
    // Manejar la selección de archivo
    this.newDocument.file = event.target.files[0];
  }

  private getStoredDocuments(): void {
    // Recuperar documentos almacenados en localStorage
    const storedData = localStorage.getItem('documentData');
    this.documents = storedData ? JSON.parse(storedData) : [];
  }

  private updateStoredDocuments(): void {
    // Actualizar documentos almacenados en localStorage
    localStorage.setItem('documentData', JSON.stringify(this.documents));
  }
}
