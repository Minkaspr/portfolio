import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-framework-icon',
  standalone: true,
  imports: [],
  templateUrl: './framework-icon.component.html',
  styleUrl: './framework-icon.component.css'
})
export class FrameworkIconComponent {
  @Input() className: string = '';
  @Input() strokeColor: string ='currentColor'
}
