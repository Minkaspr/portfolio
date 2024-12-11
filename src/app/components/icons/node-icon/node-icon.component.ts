import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-node-icon',
  standalone: true,
  imports: [],
  templateUrl: './node-icon.component.html',
  styleUrl: './node-icon.component.css'
})
export class NodeIconComponent {
  @Input() className: string = ''; 
  @Input() fillColor: string ='currentColor'
}
