import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-skill-section',
  standalone: true,
  imports: [],
  templateUrl: './card-skill-section.component.html',
  styleUrl: './card-skill-section.component.css'
})
export class CardSkillSectionComponent {
  @Input() textTitle: string = 'Title';
  @Input() textDescription: string = 'Description';
}
