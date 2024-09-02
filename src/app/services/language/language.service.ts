import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  // BehaviorSubject para mantener el idioma actual y las traducciones actuales
  private _currentLanguage: BehaviorSubject<string>;
  private _translations: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    // Recupera el idioma guardado en localStorage o usa 'en' por defecto
    const savedLanguage = localStorage.getItem('language') || 'en';
    // Inicializa el BehaviorSubject con el idioma guardado
    this._currentLanguage = new BehaviorSubject<string>(savedLanguage);
    // Inicializa el BehaviorSubject para las traducciones con un objeto vacío
    this._translations = new BehaviorSubject<any>({});
    // Carga las traducciones para el idioma guardado
    this.loadTranslations(savedLanguage);
  }

  // Método privado para cargar las traducciones desde un archivo JSON
  private loadTranslations(language: string) {
    this.http.get(`assets/languages/${language}.json`).subscribe((translations: any) => {
      // Actualiza el BehaviorSubject con las nuevas traducciones
      this._translations.next(translations);
    });
  }

  // Getter para obtener las traducciones como un Observable
  get translations() {
    return this._translations.asObservable();
  }

  // Getter para obtener el idioma actual como un Observable
  get currentLanguage() {
    return this._currentLanguage.asObservable();
  }

  // Método para cambiar el idioma
  changeLanguage(language: string) {
    // Guarda el nuevo idioma en localStorage
    localStorage.setItem('language', language);
    // Actualiza el BehaviorSubject con el nuevo idioma
    this._currentLanguage.next(language);
    // Carga las traducciones para el nuevo idioma
    this.loadTranslations(language);
  }
}
