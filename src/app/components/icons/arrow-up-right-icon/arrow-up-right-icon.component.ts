import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-up-right-icon',
  standalone: true,
  imports: [],
  templateUrl: './arrow-up-right-icon.component.html',
  styleUrl: './arrow-up-right-icon.component.css'
})
export class ArrowUpRightIconComponent {
  @Input() className: string = '';
  @Input() strokeColor: string ='currentColor'
}
