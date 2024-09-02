import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { LanguageService } from '../../services/language/language.service';
import { FolderLightIconComponent } from '../icons/folder-light-icon/folder-light-icon.component';
import { FolderDarkIconComponent } from '../icons/folder-dark-icon/folder-dark-icon.component';
import { MoonIconComponent } from '../icons/moon-icon/moon-icon.component';
import { SunIconComponent } from '../icons/sun-icon/sun-icon.component';
import { MenuIconComponent } from '../icons/menu-icon/menu-icon.component';
import { CloseIconComponent } from '../icons/close-icon/close-icon.component';
import { TranslateIconComponent } from '../icons/translate-icon/translate-icon.component';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FolderLightIconComponent, FolderDarkIconComponent, MoonIconComponent, SunIconComponent, MenuIconComponent, CloseIconComponent, TranslateIconComponent, DropdownComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  temaOscuro!: boolean;
  menuVisible: boolean = false;
  languageOptions: { value: string, label: string}[] = [];
  translations: any = {};
  selectedLanguage: string = '';

  constructor(private themeService: ThemeService, private languageService: LanguageService) {
    // Suscribirse a isDarkTheme en el constructor
    this.themeService.isDarkTheme.subscribe(isDark => {
      this.temaOscuro = isDark;
      this.toggleIcon(isDark);
    });
  }

  ngOnInit() {
    this.languageService.translations.subscribe(translations => {
      this.translations = translations;
      this.languageOptions = [
        { value: 'es', label: translations.nav.language.spanish },
        { value: 'en', label: translations.nav.language.english }
      ];
      this.languageService.currentLanguage.subscribe(language => {
        this.selectedLanguage = language;
      });
    });
  }

  cambiarTema() {
    this.temaOscuro = !this.temaOscuro;
    const tema = this.temaOscuro ? 'dark' : 'light';

    // Guardar la preferencia del tema
    localStorage.setItem('temaActual', tema);

    // Aplicar el tema al document
    if (this.temaOscuro) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Actualizar el estado del tema en ThemeService
    this.themeService.setDarkTheme(this.temaOscuro);
  }

  onLanguageSelected(language: string) {
    this.languageService.changeLanguage(language);
  }

  toggleIcon(isDark: boolean) {
    const logoDark = document.getElementById('logo-dark');
    const logoLight = document.getElementById('logo-light');
    if (logoDark && logoLight) {
      logoDark.style.display = isDark ? 'block' : 'none';
      logoLight.style.display = isDark ? 'none' : 'block';
    }
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
