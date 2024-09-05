import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-person-hero-icon',
  standalone: true,
  imports: [],
  templateUrl: './person-hero-icon.component.html',
  styleUrl: './person-hero-icon.component.css'
})
export class PersonHeroIconComponent {
  @Input() className: string = '';
  @Input() fillPrimary: string ='#156683'
  @Input() fillOnPrimaryContainer: string='#3f3d56'
  @Input() fillOnSecondaryContainer: string='#2f2e41'
  @Input() fillSurfaceDim: string='#e6e6e6'
  @Input() fillSurfaceBright: string ='#f2f2f2'
  @Input() fillSurfaceContainerLowest: string='#fff'
  @Input() fillSkin: string='#ffb6b6'
}
