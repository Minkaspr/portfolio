import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-android-icon',
  standalone: true,
  imports: [],
  templateUrl: './android-icon.component.html',
  styleUrl: './android-icon.component.css'
})
export class AndroidIconComponent {
  @Input() className: string = '';
  @Input() fillColor: string ='currentColor'
}
