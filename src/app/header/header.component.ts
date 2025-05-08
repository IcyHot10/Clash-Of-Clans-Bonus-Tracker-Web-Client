import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() ClanTagSelected = new EventEmitter<string>();
  clanTag: string = '';

  onClanTagSelected(clanTag: string) {
    this.ClanTagSelected.emit(clanTag);
  }

  onKeyPress(event: KeyboardEvent) {
    const char = event.key;
    // Allow backspace, delete, tab, escape, enter
    if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Tab' ||
        event.key === 'Escape' || event.key === 'Enter') {
      return true;
    }

    // Only allow letters, numbers, and #
    if (!/^[A-Za-z0-9#]$/.test(char)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  onClanTagChange(value: string) {
    if (!value.startsWith('#')) {
      value = '#' + value;
    }
    value = value.toUpperCase().replace(/[^#A-Z0-9]/g, '');
    this.clanTag = value;
  }
}
