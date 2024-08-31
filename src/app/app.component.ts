import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ThemeService } from './services/theme/theme.service';
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  temaOscuro: boolean = false;
  temaActual: string = 'auto';

  lightThemeIcon = 'assets/icons/folder-outline.svg';
  darkThemeIcon = 'assets/icons/folder-filled.svg';

  language: string = 'en';
  translations: any = {};

  constructor(private themeService: ThemeService, private languageService: LanguageService) {
    // Recuperar la preferencia guardada al cargar la página
    this.detectarTemaNavegador();
    this.detectBrowserLanguage();
  }

  @HostListener('window:load')
  detectarTemaNavegador() {
    // Verifica si el tema del navegador está configurado como oscuro (true o false)
    const temaNavegador = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Recupera la preferencia de tema guardada en el almacenamiento local (light o dark)
    const temaActualGuardado = localStorage.getItem('temaActual');

    if (temaActualGuardado) {
      // Si existe un tema guardado, utilízalo
      this.temaOscuro = temaActualGuardado === 'dark';
    } else {
      // Si no hay tema guardado, usa el del navegador y guárdalo
      this.temaOscuro = temaNavegador;
      this.temaActual = this.temaOscuro ? 'dark' : 'light';
      localStorage.setItem('temaActual', this.temaActual);
    }

    // Cambiar el favicon en función del tema del navegador
    this.setFavicon(this.temaOscuro ? this.darkThemeIcon : this.lightThemeIcon);
    // Añadir o quitar la clase 'dark' en el elemento <html> según el tema
    if (this.temaOscuro) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Actualizar el estado del tema oscuro en ThemeService
    this.themeService.setDarkTheme(this.temaOscuro);
  }

  // Función para cambiar el favicon
  setFavicon(icon: string): void {
    const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = icon;
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  detectBrowserLanguage() {
    // Recupera la preferencia de idioma guardada en el almacenamiento local (es, en o null)
    const languageGuardado = localStorage.getItem('language');

    if (languageGuardado !== null) {
      this.language = languageGuardado;
    } else {
      const browserLanguage = navigator.language || navigator.languages[0];
      this.language = browserLanguage.includes('es') ? 'es' : 'en';
    }

    // Carga las traducciones para el idioma seleccionado
    this.loadTranslations(this.language);
    // Actualiza el idioma en LanguageService
    this.languageService.changeLanguage(this.language);
  }
  
  changeLanguage(event: Event, language: string) {
    event.preventDefault();
    this.language = language;
    localStorage.setItem('language', language);
    this.loadTranslations(language);
    this.languageService.changeLanguage(language);
  }

  loadTranslations(language: string) {
    /*this.http.get(`/assets/languages/${language}.json`).subscribe(data => {
      this.translations = data;
    });*/
  }
}
