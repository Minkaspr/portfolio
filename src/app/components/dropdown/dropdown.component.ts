import { Component, Input } from '@angular/core';
import { ClickOutSideDirective } from '../../directives/click-out-side/click-out-side.directive';
import { TranslateIconComponent } from "../icons/translate-icon/translate-icon.component";

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [ClickOutSideDirective, TranslateIconComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() options: string[] = [];
  isDropdownOpen = false;
  selectedOption = 'Seleccionar';

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.closeDropdown();
  }
}
