import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-icon',
  standalone: true,
  imports: [],
  templateUrl: './code-icon.component.html',
  styleUrl: './code-icon.component.css'
})
export class CodeIconComponent {
  @Input() className: string = '';
  @Input() strokeColor: string = 'currentColor';
}
