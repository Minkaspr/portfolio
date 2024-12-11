import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bootstrap-icon',
  standalone: true,
  imports: [],
  templateUrl: './bootstrap-icon.component.html',
  styleUrl: './bootstrap-icon.component.css'
})
export class BootstrapIconComponent {
  @Input() className: string = ''; 
  @Input() fillColor: string ='currentColor'
}
