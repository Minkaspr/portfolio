import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-placeholder',
  standalone: true,
  imports: [],
  templateUrl: './loading-placeholder.component.html',
  styleUrl: './loading-placeholder.component.css'
})
export class LoadingPlaceholderComponent {
  @Input() message: string = '';
}
