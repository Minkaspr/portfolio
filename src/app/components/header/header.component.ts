import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  imports: [
    CommonModule, FolderLightIconComponent, FolderDarkIconComponent, 
    MoonIconComponent, SunIconComponent, MenuIconComponent, CloseIconComponent, 
    TranslateIconComponent, DropdownComponent 
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  @Output() sectionSelected = new EventEmitter<string>();
  
  public temaOscuro: boolean = false;
  public menuVisible: boolean = false;
  public languageOptions: { value: string, label: string }[] = [];
  public translations: any = {};
  public selectedLanguage: string = '';
  public isLoading: boolean = true;

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.initTheme();
    this.initLanguage();
  }

  private initTheme(): void {
    this.themeService.isDarkTheme.subscribe(isDark => {
      this.temaOscuro = isDark;
    });
  }

  private initLanguage(): void {
    this.languageService.translations.subscribe(translations => {
      this.translations = translations;
      this.languageOptions = [
        { value: 'es', label: translations?.nav?.language?.spanish },
        { value: 'en', label: translations?.nav?.language?.english }
      ];
      this.languageService.currentLanguage.subscribe(language => {
        this.selectedLanguage = language;
      });
    });
    this.languageService.loadingState.subscribe(loading => {
      this.isLoading = loading;
    });
  }

  public onSectionSelect(sectionId: string): void {
    this.sectionSelected.emit(sectionId);
  }

  public cambiarTema(): void {
    this.temaOscuro = !this.temaOscuro;
    localStorage.setItem('temaActual', this.temaOscuro ? 'dark' : 'light');
    this.themeService.setDarkTheme(this.temaOscuro);
  }

  public onLanguageSelected(language: string): void {
    this.languageService.changeLanguage(language);
  }

  public toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
}
