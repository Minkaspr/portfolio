import { TestBed } from '@angular/core/testing';
import { ClickOutSideDirective } from './click-out-side.directive';
import { ElementRef } from '@angular/core';

describe('ClickOutSideDirective', () => {
  let directive: ClickOutSideDirective;
  let elementRef: ElementRef;

  beforeEach(() => {
    // Configura el entorno de pruebas
    TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useValue: { nativeElement: document.createElement('div') } }
      ]
    });

    // Crea una instancia del ElementRef simulado
    elementRef = TestBed.inject(ElementRef);

    // Crea una instancia de la directiva con el ElementRef simulado
    directive = new ClickOutSideDirective(elementRef);
  });

  it('debería crear una instancia', () => {
    expect(directive).toBeTruthy();
  });
});
