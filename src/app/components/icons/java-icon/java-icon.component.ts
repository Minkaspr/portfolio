import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-java-icon',
  standalone: true,
  imports: [],
  templateUrl: './java-icon.component.html',
  styleUrl: './java-icon.component.css'
})
export class JavaIconComponent {
  @Input() className: string = '';
  @Input() fillColor: string ='currentColor'
}
