import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-management-icon',
  standalone: true,
  imports: [],
  templateUrl: './project-management-icon.component.html',
  styleUrl: './project-management-icon.component.css'
})
export class ProjectManagementIconComponent {
  @Input() className: string = '';
  @Input() strokeColor: string ='currentColor'
}
