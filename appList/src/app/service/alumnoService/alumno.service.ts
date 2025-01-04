import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/interface/alumno';
import { Pago } from 'src/app/interface/pago';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos:Alumno[] =  [
    { id:1, name: 'Juan', apellido:'Perez', asistencia: 90, imagen:'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true },
    { id:2, name: 'Ana', apellido:'Lopez Martinez', asistencia: 30, imagen:'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false },
    { id:3, name: 'Carlos', apellido:'Gomez', asistencia: 48, imagen:'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true },
    { id:4, name: 'Maria', apellido:'Diaz', asistencia: 80, imagen:'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false },
    { id:5, name: 'Benito', apellido:'Kamelas', asistencia: 56, imagen:'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false },
    { id:6, name: 'Armando', apellido:'Broncas', asistencia: 98, imagen:'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true },
    
  ];
  private pagos:Pago[]  = [
    {id:1, fecha:'2024-12-11', cantidad: 50, medio_pago:'efectivo', id_alumno:1},
    {id:2, fecha:'2024-07-22', cantidad: 50, medio_pago:'efectivo', id_alumno:2},
    {id:3, fecha:'2024-05-25', cantidad: 50, medio_pago:'tarjeta', id_alumno:1},
    {id:4, fecha:'2024-11-01', cantidad: 50, medio_pago:'tarjeta', id_alumno:4},
    {id:5, fecha:'2025-01-01', cantidad: 50, medio_pago:'efectivo', id_alumno:1},
    {id:6, fecha:'2024-05-01', cantidad: 50, medio_pago:'efectivo', id_alumno:6},
  ];
  

  constructor() {
   
   }

   getAlumnos(): Alumno[] {
     return this.alumnos;
   }
   getPagos(): Pago[] {
     return this.pagos;
   }
   setPagos(pago: Pago): void {    
      this.pagos.push(pago);
        console.log(this.pagos);
   }
   cambioEstadoPago(id_alumno: number): void {
     const alumno = this.alumnos.find(alumno => alumno.id === id_alumno);
     if (alumno) {
       alumno.mca_pago = !alumno.mca_pago;
     }
   }

   
   
}
