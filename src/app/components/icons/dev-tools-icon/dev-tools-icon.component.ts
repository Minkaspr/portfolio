import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dev-tools-icon',
  standalone: true,
  imports: [],
  templateUrl: './dev-tools-icon.component.html',
  styleUrl: './dev-tools-icon.component.css'
})
export class DevToolsIconComponent {
  @Input() className: string = '';
  @Input() strokeColor: string ='currentColor'
}
