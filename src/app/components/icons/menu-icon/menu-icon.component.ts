import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  standalone: true,
  imports: [],
  templateUrl: './menu-icon.component.html',
  styleUrl: './menu-icon.component.css'
})
export class MenuIconComponent {
  @Input() strokeColor: string = 'currentColor';
}
