import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bone-icon',
  standalone: true,
  imports: [],
  templateUrl: './bone-icon.component.html',
  styleUrl: './bone-icon.component.css'
})
export class BoneIconComponent {
  @Input() className: string = '';
}
