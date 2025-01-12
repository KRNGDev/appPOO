import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoAlumnoClasePage } from './listado-alumno-clase.page';

describe('ListadoAlumnoClasePage', () => {
  let component: ListadoAlumnoClasePage;
  let fixture: ComponentFixture<ListadoAlumnoClasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAlumnoClasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
