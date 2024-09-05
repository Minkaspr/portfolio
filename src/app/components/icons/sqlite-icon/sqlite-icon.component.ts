import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqlite-icon',
  standalone: true,
  imports: [],
  templateUrl: './sqlite-icon.component.html',
  styleUrl: './sqlite-icon.component.css'
})
export class SqliteIconComponent {
  @Input() className: string = '';
  @Input() fillColor: string ='currentColor'
}
