import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/interface/alumno';
import { Clase } from 'src/app/interface/clase';
import { Curso } from 'src/app/interface/curso';
import { Disciplina } from 'src/app/interface/disciplina';
import { Grados } from 'src/app/interface/grados';
import { Pago } from 'src/app/interface/pago';
import { Profesor } from 'src/app/interface/profesor';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  id_usuario: number = 1;
  private disciplinas: Disciplina[] = [
    { id: 1, nombre: 'Kenjutsu', imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { id: 2, nombre: 'Judo', imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { id: 3, nombre: 'Karate', imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', },
    { id: 4, nombre: 'Kung Fu', imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { id: 5, nombre: 'Aikido', imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { id: 6, nombre: 'Boxeo', imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { id: 7, nombre: 'Capoeira', imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { id: 8, nombre: 'Muay Thai', imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { id: 9, nombre: 'Krav Maga', imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { id: 10, nombre: 'Jiu Jitsu', imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg' }
  ]
  private cursos: Curso[] = [
    { codigo: 'K1', name: 'Curso 2024 2025', precio: 50, anioInicio: 2024, anioFin: 2025, id_disciplina: 1 },
    { codigo: 'J1', name: 'Judo', precio: 50, anioInicio: 2024, anioFin: 2025, id_disciplina: 2 },
    { codigo: 'K2', name: 'Karate', precio: 50, anioInicio: 2024, anioFin: 2025, id_disciplina: 3 },
    { codigo: 'K3', name: 'Kung Fu', precio: 50, anioInicio: 2024, anioFin: 2025, id_disciplina: 4 },
    { codigo: 'A1', name: 'Aikido', precio: 50, anioInicio: 2024, anioFin: 2025, id_disciplina: 5 },
    { codigo: 'B1', name: 'Boxeo', precio: 50, anioInicio: 2024, anioFin: 2025, id_disciplina: 6 },
    { codigo: 'C1', name: 'Capoeira', precio: 50, anioInicio: 2024, anioFin: 2025, id_disciplina: 7 },
    { codigo: 'M1', name: 'Muay Thai', precio: 50, anioInicio: 2024, anioFin: 2025, id_disciplina: 8 },
    { codigo: 'K4', name: 'Krav Maga', precio: 50, anioInicio: 2024, anioFin: 2025, id_disciplina: 9 },
    { codigo: 'J2', name: 'Jiu Jitsu', precio: 50, anioInicio: 2024, anioFin: 2025, id_disciplina: 10 }
  ];
  private clases: Clase[] = [
    { codigo: 'JUDLM', nombre: 'Clase L-M', horario: 'L - M 19:00', id_disciplina: 2, duracion: 60, codigo_curso: 'J1' },
    { codigo: 'KENLM', nombre: 'Clase L-M', horario: 'L - M 18:00', id_disciplina: 1, duracion: 60, codigo_curso: 'K1' },
    { codigo: 'KENV', nombre: 'Clase V', horario: 'Viernes 18:00', id_disciplina: 1, duracion: 60, codigo_curso: 'K1' },
    { codigo: 'KARM', nombre: 'Clase 3', horario: 'Miercoles 10:00', id_disciplina: 3, duracion: 60, codigo_curso: 'K2' },
    { codigo: 'KUNJ', nombre: 'Clase 4', horario: 'Jueves 10:00', id_disciplina: 4, duracion: 60, codigo_curso: 'K3' },
    { codigo: 'AIKV', nombre: 'Clase 5', horario: 'Viernes 10:00', id_disciplina: 5, duracion: 60, codigo_curso: 'A1' },
    { codigo: 'BOXS', nombre: 'Clase 6', horario: 'Sabado 10:00', id_disciplina: 6, duracion: 60, codigo_curso: 'B1' },
    { codigo: 'CAPD', nombre: 'Clase 7', horario: 'Domingo 10:00', id_disciplina: 7, duracion: 60, codigo_curso: 'C1' },
    { codigo: 'MUAL', nombre: 'Clase 8', horario: 'Lunes 11:00', id_disciplina: 8, duracion: 60, codigo_curso: 'M1' },
    { codigo: 'KRAM', nombre: 'Clase 9', horario: 'Martes 11:00', id_disciplina: 9, duracion: 60, codigo_curso: 'K4' },
    { codigo: 'JIUX', nombre: 'Clase 10', horario: 'Miercoles 11:00', id_disciplina: 10, duracion: 60, codigo_curso: 'J2' }
  ];
  private profesores: Profesor[] = [
    { id: 1, name: 'Alberto', apellido: 'López Martínez', id_disciplina: 1, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2000-01-01', email: 'albertolopma@gmail.com', telefono: '123456789' },
    { id: 2, name: 'Ana', apellido: 'Lopez Martinez', id_disciplina: 2, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2001-02-02', email: 'ana.lopez@example.com', telefono: '987654321' },
  ];
  private alumnos: Alumno[] = [
    
    { id: 1, name: 'Juan', apellido: 'Perez', asistencia: 90, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2000-01-01', email: 'juan.perez@example.com', telefono: '123456789', codigo_clase: 'KENLM' },
    { id: 2, name: 'Ana', apellido: 'Lopez Martinez', asistencia: 30, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2001-02-02', email: 'ana.lopez@example.com', telefono: '987654321', codigo_clase: 'JUDLM' },
    { id: 3, name: 'Carlos', apellido: 'Gomez', asistencia: 48, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2002-03-03', email: 'carlos.gomez@example.com', telefono: '456123789', codigo_clase: 'KARM' },
    { id: 4, name: 'Maria', apellido: 'Diaz', asistencia: 80, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2003-04-04', email: 'maria.diaz@example.com', telefono: '789456123', codigo_clase: 'KUNJ' },
    { id: 5, name: 'Benito', apellido: 'Kamelas', asistencia: 56, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2004-05-05', email: 'benito.kamelas@example.com', telefono: '321654987', codigo_clase: 'AIKV' },
    { id: 6, name: 'Armando', apellido: 'Broncas', asistencia: 98, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2005-06-06', email: 'armando.broncas@example.com', telefono: '654321987', codigo_clase: 'BOXS' },
  { id: 7, name: 'Lucia', apellido: 'Fernandez', asistencia: 75, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2006-07-07', email: 'lucia.fernandez@example.com', telefono: '123123123', codigo_clase: 'CAPD' },
  { id: 8, name: 'Miguel', apellido: 'Sanchez', asistencia: 85, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2007-08-08', email: 'miguel.sanchez@example.com', telefono: '321321321', codigo_clase: 'MUAL' },
  { id: 9, name: 'Laura', apellido: 'Martinez', asistencia: 65, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2008-09-09', email: 'laura.martinez@example.com', telefono: '456456456', codigo_clase: 'KRAM' },
  { id: 10, name: 'Pedro', apellido: 'Garcia', asistencia: 70, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2009-10-10', email: 'pedro.garcia@example.com', telefono: '654654654', codigo_clase: 'JIUX' },
  { id: 11, name: 'Sofia', apellido: 'Lopez', asistencia: 95, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2010-11-11', email: 'sofia.lopez@example.com', telefono: '789789789', codigo_clase: 'KENLM' },
  { id: 12, name: 'David', apellido: 'Hernandez', asistencia: 60, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2011-12-12', email: 'david.hernandez@example.com', telefono: '987987987', codigo_clase: 'JUDLM' },
  { id: 13, name: 'Elena', apellido: 'Gonzalez', asistencia: 50, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2012-01-01', email: 'elena.gonzalez@example.com', telefono: '123789456', codigo_clase: 'KARM' },
  { id: 14, name: 'Jorge', apellido: 'Rodriguez', asistencia: 55, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2013-02-02', email: 'jorge.rodriguez@example.com', telefono: '321987654', codigo_clase: 'KUNJ' },
  { id: 15, name: 'Marta', apellido: 'Martinez', asistencia: 45, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2014-03-03', email: 'marta.martinez@example.com', telefono: '456789123', codigo_clase: 'AIKV' },
  { id: 16, name: 'Luis', apellido: 'Perez', asistencia: 40, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2015-04-04', email: 'luis.perez@example.com', telefono: '654123987', codigo_clase: 'BOXS' },
  { id: 17, name: 'Paula', apellido: 'Gomez', asistencia: 35, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2016-05-05', email: 'paula.gomez@example.com', telefono: '789321654', codigo_clase: 'CAPD' },
  { id: 18, name: 'Carlos', apellido: 'Diaz', asistencia: 30, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2017-06-06', email: 'carlos.diaz@example.com', telefono: '987654123', codigo_clase: 'MUAL' },
  { id: 19, name: 'Sara', apellido: 'Fernandez', asistencia: 25, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2018-07-07', email: 'sara.fernandez@example.com', telefono: '123456321', codigo_clase: 'KRAM' },
  { id: 20, name: 'Pablo', apellido: 'Sanchez', asistencia: 20, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2019-08-08', email: 'pablo.sanchez@example.com', telefono: '321654789', codigo_clase: 'JIUX' },
  { id: 21, name: 'Clara', apellido: 'Martinez', asistencia: 15, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2020-09-09', email: 'clara.martinez@example.com', telefono: '456123321', codigo_clase: 'KENLM' },
  { id: 22, name: 'Hugo', apellido: 'Garcia', asistencia: 10, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2021-10-10', email: 'hugo.garcia@example.com', telefono: '654321123', codigo_clase: 'JUDLM' },
  { id: 23, name: 'Alicia', apellido: 'Lopez', asistencia: 5, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2022-11-11', email: 'alicia.lopez@example.com', telefono: '789123456', codigo_clase: 'KARM' },
  { id: 24, name: 'Diego', apellido: 'Hernandez', asistencia: 90, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2023-12-12', email: 'diego.hernandez@example.com', telefono: '987321654', codigo_clase: 'KUNJ' },
  { id: 25, name: 'Natalia', apellido: 'Gonzalez', asistencia: 85, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2024-01-01', email: 'natalia.gonzalez@example.com', telefono: '123654789', codigo_clase: 'AIKV' },
  { id: 26, name: 'Adrian', apellido: 'Rodriguez', asistencia: 80, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2025-02-02', email: 'adrian.rodriguez@example.com', telefono: '321789456', codigo_clase: 'BOXS' },
  { id: 27, name: 'Isabel', apellido: 'Martinez', asistencia: 75, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2026-03-03', email: 'isabel.martinez@example.com', telefono: '456321789', codigo_clase: 'CAPD' },
  { id: 28, name: 'Victor', apellido: 'Perez', asistencia: 70, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2027-04-04', email: 'victor.perez@example.com', telefono: '654789123', codigo_clase: 'KENV' },
  { id: 29, name: 'Andrea', apellido: 'Gomez', asistencia: 65, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2028-05-05', email: 'andrea.gomez@example.com', telefono: '789654321', codigo_clase: 'KRAM' },
  { id: 30, name: 'Rafael', apellido: 'Diaz', asistencia: 60, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2029-06-06', email: 'rafael.diaz@example.com', telefono: '987123456', codigo_clase: 'JIUX' },
  { id: 31, name: 'Patricia', apellido: 'Fernandez', asistencia: 55, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2030-07-07', email: 'patricia.fernandez@example.com', telefono: '123321456', codigo_clase: 'KENLM' },
  { id: 32, name: 'Mario', apellido: 'Sanchez', asistencia: 50, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2031-08-08', email: 'mario.sanchez@example.com', telefono: '321456789', codigo_clase: 'JUDLM' },
  { id: 33, name: 'Cristina', apellido: 'Martinez', asistencia: 45, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2032-09-09', email: 'cristina.martinez@example.com', telefono: '456789321', codigo_clase: 'KARM' },
  { id: 34, name: 'Fernando', apellido: 'Garcia', asistencia: 40, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2033-10-10', email: 'fernando.garcia@example.com', telefono: '654123321', codigo_clase: 'KUNJ' },
  { id: 35, name: 'Raquel', apellido: 'Lopez', asistencia: 35, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2034-11-11', email: 'raquel.lopez@example.com', telefono: '789321123', codigo_clase: 'AIKV' },
  { id: 36, name: 'Alvaro', apellido: 'Hernandez', asistencia: 30, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2035-12-12', email: 'alvaro.hernandez@example.com', telefono: '987654321', codigo_clase: 'BOXS' },
  { id: 37, name: 'Beatriz', apellido: 'Gonzalez', asistencia: 25, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2036-01-01', email: 'beatriz.gonzalez@example.com', telefono: '123456987', codigo_clase: 'CAPD' },
  { id: 38, name: 'Oscar', apellido: 'Rodriguez', asistencia: 20, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2037-02-02', email: 'oscar.rodriguez@example.com', telefono: '321654123', codigo_clase: 'MUAL' },
  { id: 39, name: 'Monica', apellido: 'Martinez', asistencia: 15, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2038-03-03', email: 'monica.martinez@example.com', telefono: '456123789', codigo_clase: 'KRAM' },
  { id: 40, name: 'Javier', apellido: 'Perez', asistencia: 10, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: false, fecha_nacimiento: '2039-04-04', email: 'javier.perez@example.com', telefono: '654789321', codigo_clase: 'JIUX' },
  { id: 41, name: 'Gabriel', apellido: 'Lopez', asistencia: 85, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2040-01-01', email: 'gabriel.lopez@example.com', telefono: '123456789', codigo_clase: 'KENLM' },
  { id: 42, name: 'Valeria', apellido: 'Martinez', asistencia: 80, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2041-02-02', email: 'valeria.martinez@example.com', telefono: '987654321', codigo_clase: 'JUDLM' },
  { id: 43, name: 'Emilio', apellido: 'Gomez', asistencia: 75, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2042-03-03', email: 'emilio.gomez@example.com', telefono: '456123789', codigo_clase: 'KARM' },
  { id: 44, name: 'Carmen', apellido: 'Diaz', asistencia: 70, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2043-04-04', email: 'carmen.diaz@example.com', telefono: '789456123', codigo_clase: 'KUNJ' },
  { id: 45, name: 'Roberto', apellido: 'Kamelas', asistencia: 65, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2044-05-05', email: 'roberto.kamelas@example.com', telefono: '321654987', codigo_clase: 'AIKV' },
  { id: 46, name: 'Esteban', apellido: 'Broncas', asistencia: 60, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2045-06-06', email: 'esteban.broncas@example.com', telefono: '654321987', codigo_clase: 'BOXS' },
  { id: 47, name: 'Luciana', apellido: 'Fernandez', asistencia: 55, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2046-07-07', email: 'luciana.fernandez@example.com', telefono: '123123123', codigo_clase: 'CAPD' },
  { id: 48, name: 'Miguel', apellido: 'Sanchez', asistencia: 50, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2047-08-08', email: 'miguel.sanchez@example.com', telefono: '321321321', codigo_clase: 'MUAL' },
  { id: 49, name: 'Laura', apellido: 'Martinez', asistencia: 45, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2048-09-09', email: 'laura.martinez@example.com', telefono: '456456456', codigo_clase: 'KENV' },
  { id: 50, name: 'Pedro', apellido: 'Garcia', asistencia: 40, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2049-10-10', email: 'pedro.garcia@example.com', telefono: '654654654', codigo_clase: 'KENV' },
  { id: 51, name: 'Sofia', apellido: 'Lopez', asistencia: 35, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2050-11-11', email: 'sofia.lopez@example.com', telefono: '789789789', codigo_clase: 'KENLM' },
  { id: 52, name: 'David', apellido: 'Hernandez', asistencia: 30, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2051-12-12', email: 'david.hernandez@example.com', telefono: '987987987', codigo_clase: 'JUDLM' },
  { id: 53, name: 'Elena', apellido: 'Gonzalez', asistencia: 25, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2052-01-01', email: 'elena.gonzalez@example.com', telefono: '123789456', codigo_clase: 'KARM' },
  { id: 54, name: 'Jorge', apellido: 'Rodriguez', asistencia: 20, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2053-02-02', email: 'jorge.rodriguez@example.com', telefono: '321987654', codigo_clase: 'KUNJ' },
  { id: 55, name: 'Marta', apellido: 'Martinez', asistencia: 15, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2054-03-03', email: 'marta.martinez@example.com', telefono: '456789123', codigo_clase: 'AIKV' },
  { id: 56, name: 'Luis', apellido: 'Perez', asistencia: 10, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2055-04-04', email: 'luis.perez@example.com', telefono: '654123987', codigo_clase: 'BOXS' },
  { id: 57, name: 'Paula', apellido: 'Gomez', asistencia: 5, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2056-05-05', email: 'paula.gomez@example.com', telefono: '789321654', codigo_clase: 'CAPD' },
  { id: 58, name: 'Carlos', apellido: 'Diaz', asistencia: 90, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2057-06-06', email: 'carlos.diaz@example.com', telefono: '987654123', codigo_clase: 'MUAL' },
  { id: 59, name: 'Sara', apellido: 'Fernandez', asistencia: 85, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2058-07-07', email: 'sara.fernandez@example.com', telefono: '123456321', codigo_clase: 'KRAM' },
  { id: 60, name: 'Pablo', apellido: 'Sanchez', asistencia: 80, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2059-08-08', email: 'pablo.sanchez@example.com', telefono: '321654789', codigo_clase: 'JIUX' },
  { id: 61, name: 'Clara', apellido: 'Martinez', asistencia: 75, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2060-09-09', email: 'clara.martinez@example.com', telefono: '456123321', codigo_clase: 'KENLM' },
  { id: 62, name: 'Hugo', apellido: 'Garcia', asistencia: 70, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2061-10-10', email: 'hugo.garcia@example.com', telefono: '654321123', codigo_clase: 'JUDLM' },
  { id: 63, name: 'Alicia', apellido: 'Lopez', asistencia: 65, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2062-11-11', email: 'alicia.lopez@example.com', telefono: '789123456', codigo_clase: 'KARM' },
  { id: 64, name: 'Diego', apellido: 'Hernandez', asistencia: 60, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2063-12-12', email: 'diego.hernandez@example.com', telefono: '987321654', codigo_clase: 'KUNJ' },
  { id: 65, name: 'Natalia', apellido: 'Gonzalez', asistencia: 55, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2064-01-01', email: 'natalia.gonzalez@example.com', telefono: '123654789', codigo_clase: 'AIKV' },
  { id: 66, name: 'Adrian', apellido: 'Rodriguez', asistencia: 50, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2065-02-02', email: 'adrian.rodriguez@example.com', telefono: '321789456', codigo_clase: 'KENV' },
  { id: 67, name: 'Isabel', apellido: 'Martinez', asistencia: 45, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2066-03-03', email: 'isabel.martinez@example.com', telefono: '456321789', codigo_clase: 'CAPD' },
  { id: 68, name: 'Victor', apellido: 'Perez', asistencia: 40, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2067-04-04', email: 'victor.perez@example.com', telefono: '654789123', codigo_clase: 'MUAL' },
  { id: 69, name: 'Andrea', apellido: 'Gomez', asistencia: 35, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2068-05-05', email: 'andrea.gomez@example.com', telefono: '789654321', codigo_clase: 'KRAM' },
  { id: 70, name: 'Rafael', apellido: 'Diaz', asistencia: 30, imagen: 'https://ionicframework.com/docs/img/demos/avatar.svg', mca_pago: true, fecha_nacimiento: '2069-06-06', email: 'rafael.diaz@example.com', telefono: '987123456', codigo_clase: 'JIUX' }
  ];
  private pagos: Pago[] = [
    { id: 1, fecha: '2024-12-11', cantidad: 50, medio_pago: 'efectivo', id_alumno: 1 },
    { id: 2, fecha: '2024-07-22', cantidad: 50, medio_pago: 'efectivo', id_alumno: 2 },
    { id: 3, fecha: '2024-05-25', cantidad: 50, medio_pago: 'tarjeta', id_alumno: 1 },
    { id: 4, fecha: '2024-11-01', cantidad: 50, medio_pago: 'tarjeta', id_alumno: 4 },
    { id: 5, fecha: '2025-01-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 1 },
    { id: 6, fecha: '2024-05-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 6 },
    { id: 7, fecha: '2024-09-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 5 },
    { id: 8, fecha: '2024-10-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 3 },
    { id: 9, fecha: '2024-11-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 2 },
    { id: 10, fecha: '2024-12-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 4 },
    { id: 11, fecha: '2024-01-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 6 },
    { id: 12, fecha: '2024-02-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 5 },
    { id: 13, fecha: '2024-03-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 3 },
    { id: 14, fecha: '2024-04-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 2 },
    { id: 15, fecha: '2024-05-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 1 },
    { id: 16, fecha: '2024-06-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 6 },
  { id: 17, fecha: '2024-07-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 7 },
  { id: 18, fecha: '2024-08-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 8 },
  { id: 19, fecha: '2024-09-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 9 },
  { id: 20, fecha: '2024-10-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 10 },
  { id: 21, fecha: '2024-11-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 11 },
  { id: 22, fecha: '2024-12-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 12 },
  { id: 23, fecha: '2024-01-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 13 },
  { id: 24, fecha: '2024-02-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 14 },
  { id: 25, fecha: '2024-03-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 15 },
  { id: 26, fecha: '2024-04-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 16 },
  { id: 27, fecha: '2024-05-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 17 },
  { id: 28, fecha: '2024-06-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 18 },
  { id: 29, fecha: '2024-07-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 19 },
  { id: 30, fecha: '2024-08-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 20 },
  { id: 31, fecha: '2024-09-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 21 },
  { id: 32, fecha: '2024-10-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 22 },
  { id: 33, fecha: '2024-11-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 23 },
  { id: 34, fecha: '2024-12-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 24 },
  { id: 35, fecha: '2024-01-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 25 },
  { id: 36, fecha: '2024-02-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 26 },
  { id: 37, fecha: '2024-03-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 27 },
  { id: 38, fecha: '2024-04-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 28 },
  { id: 39, fecha: '2024-05-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 29 },
  { id: 40, fecha: '2024-06-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 30 },
  { id: 41, fecha: '2024-07-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 31 },
  { id: 42, fecha: '2024-08-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 32 },
  { id: 43, fecha: '2024-09-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 33 },
  { id: 44, fecha: '2024-10-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 34 },
  { id: 45, fecha: '2024-11-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 35 },
  { id: 46, fecha: '2024-12-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 36 },
  { id: 47, fecha: '2024-01-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 37 },
  { id: 48, fecha: '2024-02-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 38 },
  { id: 49, fecha: '2024-03-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 39 },
  { id: 50, fecha: '2024-04-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 40 },
  { id: 51, fecha: '2024-05-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 41 },
  { id: 52, fecha: '2024-06-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 42 },
  { id: 53, fecha: '2024-07-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 43 },
  { id: 54, fecha: '2024-08-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 44 },
  { id: 55, fecha: '2024-09-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 45 },
  { id: 56, fecha: '2024-10-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 46 },
  { id: 57, fecha: '2024-11-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 47 },
  { id: 58, fecha: '2024-12-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 48 },
  { id: 59, fecha: '2024-01-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 49 },
  { id: 60, fecha: '2024-02-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 50 },
  { id: 61, fecha: '2024-03-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 51 },
  { id: 62, fecha: '2024-04-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 52 },
  { id: 63, fecha: '2024-05-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 53 },
  { id: 64, fecha: '2024-06-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 54 },
  { id: 65, fecha: '2024-07-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 55 },
  { id: 66, fecha: '2024-08-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 56 },
  { id: 67, fecha: '2024-09-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 57 },
  { id: 68, fecha: '2024-10-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 58 },
  { id: 69, fecha: '2024-11-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 59 },
  { id: 70, fecha: '2024-12-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 60 },
  { id: 71, fecha: '2024-01-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 61 },
  { id: 72, fecha: '2024-02-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 62 },
  { id: 73, fecha: '2024-03-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 63 },
  { id: 74, fecha: '2024-04-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 64 },
  { id: 75, fecha: '2024-05-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 65 },
  { id: 76, fecha: '2024-06-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 66 },
  { id: 77, fecha: '2024-07-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 67 },
  { id: 78, fecha: '2024-08-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 68 },
  { id: 79, fecha: '2024-09-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 69 },
  { id: 80, fecha: '2024-10-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 70 },
  { id: 81, fecha: '2024-11-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 1 },
  { id: 82, fecha: '2024-12-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 2 },
  { id: 83, fecha: '2024-01-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 3 },
  { id: 84, fecha: '2024-02-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 4 },
  { id: 85, fecha: '2024-03-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 5 },
  { id: 86, fecha: '2024-04-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 6 },
  { id: 87, fecha: '2024-05-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 7 },
  { id: 88, fecha: '2024-06-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 8 },
  { id: 89, fecha: '2024-07-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 9 },
  { id: 90, fecha: '2024-08-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 10 },
  { id: 91, fecha: '2024-09-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 11 },
  { id: 92, fecha: '2024-10-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 12 },
  { id: 93, fecha: '2024-11-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 13 },
  { id: 94, fecha: '2024-12-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 14 },
  { id: 95, fecha: '2024-01-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 15 },
  { id: 96, fecha: '2024-02-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 16 },
  { id: 97, fecha: '2024-03-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 17 },
  { id: 98, fecha: '2024-04-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 18 },
  { id: 99, fecha: '2024-05-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 19 },
  { id: 100, fecha: '2024-06-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 20 },
  { id: 101, fecha: '2024-07-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 21 },
  { id: 102, fecha: '2024-08-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 22 },
  { id: 103, fecha: '2024-09-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 23 },
  { id: 104, fecha: '2024-10-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 24 },
  { id: 105, fecha: '2024-11-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 25 },
  { id: 106, fecha: '2024-12-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 26 },
  { id: 107, fecha: '2024-01-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 27 },
  { id: 108, fecha: '2024-02-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 28 },
  { id: 109, fecha: '2024-03-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 29 },
  { id: 110, fecha: '2024-04-01', cantidad: 50, medio_pago: 'efectivo', id_alumno: 30 }
  ];
  private grados: Grados[]=[
    {id_alumno:21,id_disciplina:1,nombre:'Shoden'},
    {id_alumno:51,id_disciplina:1,nombre:'Shoden'},
    {id_alumno:31,id_disciplina:1,nombre:'Chuden'},
    {id_alumno:61,id_disciplina:1,nombre:'Shoden'},
    {id_alumno:41,id_disciplina:1,nombre:'Menkyo'},
    {id_alumno:1,id_disciplina:1,nombre:'Shoden'},
    {id_alumno:11,id_disciplina:1,nombre:'Chuden'},
    {id_alumno:50,id_disciplina:1,nombre:'Shoden'},
    {id_alumno:49,id_disciplina:1,nombre:'Chuden'},
    {id_alumno:66,id_disciplina:1,nombre:'Shoden'},
    {id_alumno:28,id_disciplina:1,nombre:'Chuden'},
  ]


  constructor() {
    this.alumnos.forEach(alumno => {
      const pago = this.pagos.find(pago => pago.id_alumno === alumno.id && pago.fecha === '2025-01-01');
      if (pago) {
        alumno.mca_pago = true;
      }
    });
  }

  //Esta sin implementar hay que hacerlo
  private generarcodigo(): { nombre: string, dias: string }[] {
    const diasSemana = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
    return this.disciplinas.map(disciplina => {
      const dias = this.clases
        .filter(clase => clase.id_disciplina === disciplina.id)
        .map(clase => diasSemana[new Date(clase.horario.split(' ')[1]).getDay()])
        .join('');
      return { nombre: disciplina.nombre, dias };
    });
  }

  getGrados(){
    return this.grados;
  }
  setGrados(grado:Grados){
    this.grados.push(grado);
  }
  getProfesores(): Profesor[] {
    return this.profesores;
  }

  setProfesores(profesor: Profesor): void {
    this.profesores.push(profesor);
  }

  getDisciplinas(): Disciplina[] {
    return this.disciplinas;
  }

  setDisciplinas(disciplina: Disciplina): void {
    this.disciplinas.push(disciplina);
  }

  getCursos(): Curso[] {
    return this.cursos;
  }

  setCursos(curso: Curso): void {
    this.cursos.push(curso);
  }

  getClases(): Clase[] {
    return this.clases;
  }

  setClases(clase: Clase): void {
    this.clases.push(clase);
  }

  getAlumnos(): Alumno[] {
    return this.alumnos;
  }
  setAlumnos(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }
  getPagos(): Pago[] {
    return this.pagos;
  }
  setPagos(pago: Pago): void {
    this.pagos.push(pago);

  }
  cambioEstadoPago(id_alumno: number): void {
    const alumno = this.alumnos.find(alumno => alumno.id === id_alumno);
    if (alumno) {
      alumno.mca_pago = !alumno.mca_pago;
    }
  }



}
