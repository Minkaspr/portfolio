import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sun-icon',
  standalone: true,
  imports: [],
  templateUrl: './sun-icon.component.html',
  styleUrl: './sun-icon.component.css'
})
export class SunIconComponent {
  @Input() strokeColor: string = 'currentColor';
}
