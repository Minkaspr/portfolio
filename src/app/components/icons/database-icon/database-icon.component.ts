import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-database-icon',
  standalone: true,
  imports: [],
  templateUrl: './database-icon.component.html',
  styleUrl: './database-icon.component.css'
})
export class DatabaseIconComponent {
  @Input() className: string = '';
  @Input() strokeColor: string ='currentColor'
}
