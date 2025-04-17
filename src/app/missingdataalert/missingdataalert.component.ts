import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-missingdataalert',
  imports: [],
  templateUrl: './missingdataalert.component.html',
  styleUrl: './missingdataalert.component.css'
})
export class MissingdataalertComponent {
  @Input() selected: boolean = false;
}
