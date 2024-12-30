import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadistcasPage } from './estadistcas.page';

describe('EstadistcasPage', () => {
  let component: EstadistcasPage;
  let fixture: ComponentFixture<EstadistcasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadistcasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
