import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly defaultLanguage: string = 'en';
  private readonly translationsPath: string = 'assets/languages/';
  
  private _currentLanguage: BehaviorSubject<string>;
  private _translations: BehaviorSubject<any>;
  private _loadingState: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this._currentLanguage = new BehaviorSubject<string>(this.defaultLanguage);
    this._translations = new BehaviorSubject<any>({});
    this._loadingState = new BehaviorSubject<boolean>(true); 
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    const savedLanguage = localStorage.getItem('language') || this.defaultLanguage;
    const initialLanguage = this.getInitialLanguage(savedLanguage);
    this.setLanguage(initialLanguage);
    localStorage.setItem('language', initialLanguage);
  }

  private getInitialLanguage(savedLanguage: string): string {
    return ['es', 'en'].includes(savedLanguage) ? savedLanguage : this.defaultLanguage;
  }

  private setLanguage(language: string): void {
    this._currentLanguage.next(language);
    this.loadTranslations(language);
    this.updateHtmlLang(language);
  }

  private loadTranslations(language: string): void {
    this._loadingState.next(true); // Comienza la carga
    this.http.get(`${this.translationsPath}${language}.json`).subscribe({
      next: (translations: any) => {
        this._translations.next(translations);
        this._loadingState.next(false); // Termina la carga cuando las traducciones están listas
      },
      error: () => {
        this._translations.next({});
        this._loadingState.next(false); // Termina la carga incluso en caso de error
      }
    });
  }

  private updateHtmlLang(language: string): void {
    document.documentElement.lang = language; // Cambia el atributo lang del <html>
  }

  public get translations() {
    return this._translations.asObservable();
  }

  public get currentLanguage() {
    return this._currentLanguage.asObservable();
  }

  public get loadingState() {
    return this._loadingState.asObservable(); // Expone el estado de carga
  }

  public changeLanguage(language: string): void {
    if (['es', 'en'].includes(language)) {
      localStorage.setItem('language', language);
      this.setLanguage(language);
    }
  }
}
