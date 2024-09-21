import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-tools-icon',
  standalone: true,
  imports: [],
  templateUrl: './work-tools-icon.component.html',
  styleUrl: './work-tools-icon.component.css'
})
export class WorkToolsIconComponent {
  @Input() className: string = '';
  @Input() strokeColor: string ='currentColor'
}
