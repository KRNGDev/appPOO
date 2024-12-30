import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput,IonList, IonCardSubtitle, IonItem, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonLabel, IonAvatar, IonChip, IonButtons, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, callOutline, mailOutline, personOutline, calendarOutline, locationOutline, schoolOutline, timeOutline, cashOutline } from 'ionicons/icons';
import { GraficaCircularComponent } from 'src/app/componente/grafica-circular/grafica-circular.component';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/interface/alumno';
import { AlumnoService } from 'src/app/service/alumnoService/alumno.service';

@Component({
  selector: 'app-ficha-alumno',
  templateUrl: './ficha-alumno.page.html',
  styleUrls: ['./ficha-alumno.page.scss'],
  standalone: true,
  imports: [IonContent, IonInput, IonList,  GraficaCircularComponent, IonCardSubtitle, IonItem, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonLabel, IonAvatar, IonChip, IonIcon, IonButtons, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})


export class FichaAlumnoPage implements OnInit {
  public name!: string;
  private activatedRoute = inject(ActivatedRoute);
  private alumno: Alumno | undefined;
  

  constructor(private location: Location, private alumnoService: AlumnoService) {
    addIcons({ arrowBackOutline, calendarOutline, locationOutline, schoolOutline, timeOutline, cashOutline, callOutline, mailOutline, personOutline });
   
    this.asignar();
  }
  asignar() {
    this.alumno = this.alumnoService.getAlumnos().find((alumno) => alumno.name === this.name);
    console.log(this.alumno);
  }
  pagAtras() {
    this.location.back();
  }

  getAlumno() {
    return this.alumno;
  }
  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.asignar();
  }
}
