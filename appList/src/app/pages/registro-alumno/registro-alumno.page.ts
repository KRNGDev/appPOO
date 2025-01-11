import { Component, OnInit } from '@angular/core';
import { CommonModule,Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonSelect, IonSelectOption, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonButtons } from '@ionic/angular/standalone';
import { Alumno } from 'src/app/interface/alumno';
import { AlumnoService } from 'src/app/service/alumnoService/alumno.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
  standalone: true,
  imports: [IonButtons, IonIcon, IonSelect, IonSelectOption, IonButton,IonMenuButton, IonInput, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroAlumnoPage implements OnInit {
  private alumno: Alumno={} as Alumno;

  constructor(private location: Location, private alumnoService: AlumnoService, private router: Router) { 
    addIcons({ arrowBackOutline });
  }

  submitAlumno(alumno: Alumno): void {
    console.log(alumno);
    alumno.id = this.alumnoService.getAlumnos().length + 1;
    alumno.mca_pago = false;
    alumno.imagen = 'https://ionicframework.com/docs/img/demos/avatar.svg';
    this.alumnoService.setAlumnos(alumno);
    this.router.navigate(['/lista-alumnos/Alumnos']);


  }
getAlumno(): Alumno {
    return this.alumno;
  }
  ngOnInit() {
  }
  pagAtras() {
    this.location.back();
  }
}
