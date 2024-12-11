import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-angular-icon',
  standalone: true,
  imports: [],
  templateUrl: './angular-icon.component.html',
  styleUrl: './angular-icon.component.css'
})
export class AngularIconComponent {
  @Input() className: string = '';
  @Input() fillColor: string ='currentColor'
}
