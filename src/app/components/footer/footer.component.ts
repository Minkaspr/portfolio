import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageService } from '../../services/language/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public translations$: Observable<any>;

  constructor(
    private languageService: LanguageService
    ) {
    this.translations$ = this.languageService.translations;
  }
}
