import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { ClickOutSideDirective } from '../../directives/click-out-side/click-out-side.directive';
import { TranslateIconComponent } from "../icons/translate-icon/translate-icon.component";

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [ClickOutSideDirective, TranslateIconComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent implements OnChanges{
  @Input() options: { value: string, label: string }[] = [];
  @Input() selectedLanguage: string = '';
  @Output() optionSelected = new EventEmitter<string>();
  isDropdownOpen = false;
  selectedOption = 'Seleccionar';

  selectedValue: string | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'] || changes['selectedLanguage']) {
      this.updateSelectedOption();
    }
  }

  updateSelectedOption() {
    const selected = this.options.find(option => option.value === this.selectedLanguage);
    if (selected) {
      this.selectedOption = selected.label;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  selectOption(option: { value: string, label: string }) {
    this.selectedOption = option.label;
    this.selectedValue = option.value;
    this.optionSelected.emit(option.value);
    this.closeDropdown();
  }
}
