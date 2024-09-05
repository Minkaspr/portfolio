import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('debería ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('debería inicializar el tema correctamente', () => {
    // Espía en `localStorage.getItem` para devolver null.
    const localStorageGetItemSpy = spyOn(localStorage, 'getItem').and.callFake(() => null);

    // Espía en `setDarkTheme` para verificar que se llame con un valor booleano.
    const setDarkThemeSpy = spyOn(service as any, 'setDarkTheme');

    // Espía en `updateFavicon` para verificar que se llame.
    const updateFaviconSpy = spyOn(service as any, 'updateFavicon');

    // Llama al método privado `initializeTheme`.
    service['initializeTheme']();

    // Verifica que `setDarkTheme` fue llamado con un valor booleano.
    expect(setDarkThemeSpy).toHaveBeenCalledWith(jasmine.any(Boolean));

    // Verifica que `updateFavicon` fue llamado.
    expect(updateFaviconSpy).toHaveBeenCalled();
  });

  it('debería cambiar el tema oscuro correctamente', () => {
    const isDarkTheme = true;

    // Espía en `classList.add` y `classList.remove`.
    const documentClassListAddSpy = spyOn(document.documentElement.classList, 'add');
    const documentClassListRemoveSpy = spyOn(document.documentElement.classList, 'remove');

    // Llama al método público `setDarkTheme`.
    service.setDarkTheme(isDarkTheme);

    // Verifica que `classList.add` fue llamado con 'dark'.
    expect(documentClassListAddSpy).toHaveBeenCalledWith('dark');

    // Verifica que `classList.remove` no fue llamado.
    expect(documentClassListRemoveSpy).not.toHaveBeenCalled();
  });

  it('debería cambiar el favicon según el tema', () => {
    // Espía en `setFavicon` para verificar que se llame con una cadena.
    const setFaviconSpy = spyOn(service as any, 'setFavicon');

    // Llama al método privado `updateFavicon`.
    service['updateFavicon']();

    // Verifica que `setFavicon` fue llamado con una cadena.
    expect(setFaviconSpy).toHaveBeenCalledWith(jasmine.any(String));
  });

  it('debería establecer el favicon correctamente', () => {
    // Crea un elemento <link> y espía en `querySelector` y `appendChild`.
    const linkElement = document.createElement('link');
    spyOn(document, 'querySelector').and.returnValue(linkElement);
    spyOn(document.getElementsByTagName('head')[0], 'appendChild');

    // Llama al método privado `setFavicon`.
    service['setFavicon']('test-icon.svg');

    // Verifica que el href del <link> sea 'test-icon.svg'.
    expect(linkElement.href).toBe('test-icon.svg');
  });
});
