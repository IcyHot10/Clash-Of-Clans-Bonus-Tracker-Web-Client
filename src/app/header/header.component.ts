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

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    if (!value.startsWith('#')) {
      value = '#' + value;
    }
    value = value.toUpperCase().replace(/[^#A-Z0-9]/g, '');

    // Update the input value
    this.clanTag = value;
  }
}
