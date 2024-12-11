import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postgresql-icon',
  standalone: true,
  imports: [],
  templateUrl: './postgresql-icon.component.html',
  styleUrl: './postgresql-icon.component.css'
})
export class PostgresqlIconComponent {
  @Input() className: string = ''; 
  @Input() fillColor: string ='currentColor'
}
