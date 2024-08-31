import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-folder-light-icon',
  standalone: true,
  imports: [],
  templateUrl: './folder-light-icon.component.html',
  styleUrl: './folder-light-icon.component.css'
})
export class FolderLightIconComponent {
  @Input() fillColor: string = 'currentColor';
  @Input() strokeColor: string = 'currentColor';
  @Input() className: string = '';
}
