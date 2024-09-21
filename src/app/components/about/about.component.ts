import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LanguageService } from '../../services/language/language.service';
import { ThemeService } from '../../services/theme/theme.service';
import { CodeIconComponent } from '../icons/code-icon/code-icon.component';
import { DatabaseIconComponent } from '../icons/database-icon/database-icon.component';
import { FrameworkIconComponent } from "../icons/framework-icon/framework-icon.component";
import { DevToolsIconComponent } from '../icons/dev-tools-icon/dev-tools-icon.component';
import { ProjectManagementIconComponent } from "../icons/project-management-icon/project-management-icon.component";
import { WorkToolsIconComponent } from "../icons/work-tools-icon/work-tools-icon.component";
import { PrototypingIconComponent } from "../icons/prototyping-icon/prototyping-icon.component";
import { FishIconComponent } from "../icons/fish-icon/fish-icon.component";
import { BoneIconComponent } from '../icons/bone-icon/bone-icon.component';
import { UserIconComponent } from '../icons/user-icon/user-icon.component';
import { AffiliateIconComponent } from '../icons/affiliate-icon/affiliate-icon.component';
import { AtIconComponent } from '../icons/at-icon/at-icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    CodeIconComponent,
    DatabaseIconComponent,
    FrameworkIconComponent,
    DevToolsIconComponent,
    ProjectManagementIconComponent,
    WorkToolsIconComponent,
    PrototypingIconComponent,
    FishIconComponent,
    BoneIconComponent,
    UserIconComponent,
    AffiliateIconComponent,
    AtIconComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
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
