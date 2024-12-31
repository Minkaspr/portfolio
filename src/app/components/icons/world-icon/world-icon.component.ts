import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-world-icon',
  standalone: true,
  imports: [],
  templateUrl: './world-icon.component.html',
  styleUrl: './world-icon.component.css'
})
export class WorldIconComponent {
  @Input() className: string = '';
}
