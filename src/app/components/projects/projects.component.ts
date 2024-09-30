import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Project } from '../../models/project';
import { ApiService } from '../../services/api/api.service';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{

  @Input() sectionId: string = '';

  public translations: any = {};
  projects: Project[] = [];
  error: string | null = null;
  displayedProjects: Project[] = [];
  rowsToShow: number = 2;
  columns: number = 1;

  constructor(
    private apiService: ApiService, 
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.loadLanguage();
    this.loadProjects();
    this.updateColumns();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateColumns();
  }
//448-472
  private updateColumns(): void {
    const width = window.innerWidth;
    if (width >= 1536) {
      this.columns = 3; // 2xl
    } else if (width >= 1280) {
      this.columns = 2; // xl
    } else if (width >= 1024) {
      this.columns = 2; // lg
    } else if (width >= 768) {
      this.columns = 2; // md
    } else {
      this.columns = 1; // sm
    }
    this.updateDisplayedProjects();
  }

  private loadLanguage(): void {
    this.languageService.translations.subscribe(translations => {
      this.translations = translations;
    });
  }

  private loadProjects(): void {
    this.apiService.getProjects().subscribe({
      next: (response) => {
        if (response.statusCode === 200) {
          this.projects = response.data;
          this.updateDisplayedProjects();
          console.log('Proyectos obtenidos:', this.projects);
        } else {
          this.error = 'Error en la respuesta de la API';
        }
      },
      error: (err) => {
        console.error('Error en la conexión con la API:', err);
        this.error = 'Error en la conexión con la API';
      }
    });
  }

  private updateDisplayedProjects(): void {
    const totalProjectsToShow = this.rowsToShow * this.columns;
    this.displayedProjects = this.projects.slice(0, totalProjectsToShow);
  }

  loadMore(): void {
    this.rowsToShow += 2; 
    this.updateDisplayedProjects();
  }
}
