import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-linkedin-icon',
  standalone: true,
  imports: [],
  templateUrl: './linkedin-icon.component.html',
  styleUrl: './linkedin-icon.component.css'
})
export class LinkedinIconComponent {
  @Input() className: string = '';
}
