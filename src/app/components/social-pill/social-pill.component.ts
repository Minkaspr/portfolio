import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-pill',
  standalone: true,
  imports: [],
  templateUrl: './social-pill.component.html',
  styleUrl: './social-pill.component.css'
})
export class SocialPillComponent {
  @Input() href: string = '#';
}
