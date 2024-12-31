import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-device-laptop-icon',
  standalone: true,
  imports: [],
  templateUrl: './device-laptop-icon.component.html',
  styleUrl: './device-laptop-icon.component.css'
})
export class DeviceLaptopIconComponent {
  @Input() className: string = '';
}
