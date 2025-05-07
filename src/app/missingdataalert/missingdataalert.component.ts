import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-missingdataalert',
  standalone: true,
  imports: [],
  templateUrl: './missingdataalert.component.html',
  styleUrl: './missingdataalert.component.css'
})
export class MissingdataalertComponent {
  @Input({required: true}) state?: string
}
