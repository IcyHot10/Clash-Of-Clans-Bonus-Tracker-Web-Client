import { NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  constructor(private spinner: NgxSpinnerService) {}

  loading(){
    this.spinner.show()
  }

  idle(){
    this.spinner.hide()
  }
}
