import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prototyping-icon',
  standalone: true,
  imports: [],
  templateUrl: './prototyping-icon.component.html',
  styleUrl: './prototyping-icon.component.css'
})
export class PrototypingIconComponent {
  @Input() className: string = '';
  @Input() strokeColor: string ='currentColor'
}
