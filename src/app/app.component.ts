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
export class AppComponent implements OnInit{
  @ViewChild('header', { static: true }) header!: ElementRef;

  title = 'portfolio'; 
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor(
    private themeService: ThemeService, 
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((fragment: string | null) => {
      this.jumpToSection(fragment || 'hero');
    });
  }

  jumpToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /*scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    console.log('Header:', this.header);
    console.log('Element:', element);
    const headerHeight = this.header.nativeElement.offsetHeight;
  
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }*/
  
}
