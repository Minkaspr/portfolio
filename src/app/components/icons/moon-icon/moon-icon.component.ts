import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moon-icon',
  standalone: true,
  imports: [],
  templateUrl: './moon-icon.component.html',
  styleUrl: './moon-icon.component.css'
})
export class MoonIconComponent {
  @Input() strokeColor: string = 'currentColor';
}
