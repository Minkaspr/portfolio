import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme/theme.service';
import { BadgeComponent } from '../badge/badge.component';
import { SocialPillComponent } from "../social-pill/social-pill.component";
import { LinkedinIconComponent } from "../icons/linkedin-icon/linkedin-icon.component";
import { MailIconComponent } from '../icons/mail-icon/mail-icon.component';
import { PersonHeroIconComponent } from '../icons/person-hero-icon/person-hero-icon.component';
import { LanguageService } from '../../services/language/language.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    BadgeComponent,
    SocialPillComponent,
    MailIconComponent,
    LinkedinIconComponent,
    PersonHeroIconComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit{
  temaOscuro!: boolean;
  translations$: Observable<any>;

  constructor(private themeService: ThemeService, private languageService: LanguageService) {
    // Suscribirse a isDarkTheme en el constructor
    this.themeService.isDarkTheme.subscribe(isDark => {
      this.temaOscuro = isDark;
    });
    this.translations$ = this.languageService.translations;
  }

  ngOnInit(): void {}
}
