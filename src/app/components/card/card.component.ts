import { Component } from '@angular/core';
import { JavaIconComponent } from '../icons/java-icon/java-icon.component';
import { ThemeService } from '../../services/theme/theme.service';
import { AndroidIconComponent } from "../icons/android-icon/android-icon.component";
import { SqliteIconComponent } from '../icons/sqlite-icon/sqlite-icon.component';
import { ArrowUpRightIconComponent } from "../icons/arrow-up-right-icon/arrow-up-right-icon.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    JavaIconComponent,
    AndroidIconComponent,
    SqliteIconComponent,
    ArrowUpRightIconComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  temaOscuro!: boolean;

  constructor(private themeService: ThemeService) {
    // Suscribirse a isDarkTheme en el constructor
    this.themeService.isDarkTheme.subscribe(isDark => {
      this.temaOscuro = isDark;
    });
  }
}
