import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fish-icon',
  standalone: true,
  imports: [],
  templateUrl: './fish-icon.component.html',
  styleUrl: './fish-icon.component.css'
})
export class FishIconComponent {
  @Input() className: string = '';
}
