// auth.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = [];

  constructor() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  register(user: any): Observable<{ success: boolean, error?: string }> {
    const isEmailTaken = this.users.some(u => u.email === user.email);

    if (isEmailTaken) {
      return of({ success: false, error: 'El correo electrónico ya está registrado.' });
    } else {
      this.users.push(user);
      localStorage.setItem('users', JSON.stringify(this.users));
      return of({ success: true });
    }
  }

  // Puedes agregar otras funciones relacionadas con la autenticación aquí si es necesario

  // Ejemplo de función para el inicio de sesión
  login(email: string, password: string): Observable<{ success: boolean, error?: string }> {
    // Lógica de inicio de sesión (simulada en este ejemplo)
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      return of({ success: true });
    } else {
      return of({ success: false, error: 'Credenciales incorrectas.' });
    }
  }

  // ... Otro código del servicio ...
}
