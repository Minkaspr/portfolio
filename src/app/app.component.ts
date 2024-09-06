import { Component, ViewChild, ElementRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ThemeService } from './services/theme/theme.service';
import { LanguageService } from './services/language/language.service';
import { LoadingPlaceholderComponent } from "./components/loading-placeholder/loading-placeholder.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { AboutComponent } from "./components/about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoadingPlaceholderComponent, HeroComponent, ProjectsComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  constructor(
    private themeService: ThemeService, 
    private languageService: LanguageService
  ) { }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    const headerOffset = 68; 
    const elementPosition = section?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
