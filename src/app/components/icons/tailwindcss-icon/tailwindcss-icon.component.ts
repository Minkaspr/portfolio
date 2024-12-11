import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tailwindcss-icon',
  standalone: true,
  imports: [],
  templateUrl: './tailwindcss-icon.component.html',
  styleUrl: './tailwindcss-icon.component.css'
})
export class TailwindcssIconComponent {
  @Input() className: string = '';
  @Input() strokeColor: string = 'currentColor';
  @Input() fillColor: string ='none'
}
