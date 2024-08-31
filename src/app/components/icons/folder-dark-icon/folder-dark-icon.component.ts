import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-folder-dark-icon',
  standalone: true,
  imports: [],
  templateUrl: './folder-dark-icon.component.html',
  styleUrl: './folder-dark-icon.component.css'
})
export class FolderDarkIconComponent {
  @Input() strokeColor: string = 'currentColor';
  @Input() className: string = '';
}
