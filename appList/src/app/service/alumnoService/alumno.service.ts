import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/interface/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos : Alumno[] = [];

  constructor() {
    this.alumnos = [
      { name: 'Juan Perez', asistencia: 80, pago: true },
      { name: 'Ana Lopez', asistencia: 90, pago: false },
      { name: 'Carlos Gomez', asistencia: 70, pago: true },
      { name: 'Maria Diaz', asistencia: 50, pago: false },
    ];
   }

   getAlumnos(): Alumno[] {
     return this.alumnos;
   }
   
}