import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaIconComponent } from '../icons/java-icon/java-icon.component';
import { ThemeService } from '../../services/theme/theme.service';
import { AndroidIconComponent } from "../icons/android-icon/android-icon.component";
import { SqliteIconComponent } from '../icons/sqlite-icon/sqlite-icon.component';
import { ArrowUpRightIconComponent } from "../icons/arrow-up-right-icon/arrow-up-right-icon.component";
import { Project } from '../../models/project';
import { Observable } from 'rxjs';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    JavaIconComponent,
    AndroidIconComponent,
    SqliteIconComponent,
    ArrowUpRightIconComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent{
  @Input() project!: Project;

  public darkTheme$: Observable<boolean>;
  public translations$: Observable<any>;

  constructor(
    private themeService: ThemeService, 
    private languageService: LanguageService
    ) {
    this.darkTheme$ = this.themeService.isDarkTheme;
    this.translations$ = this.languageService.translations;
  }
}
