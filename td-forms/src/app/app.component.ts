import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dropdownOptions = [
    { name: 'Basic', value: 'basic' },
    { name: 'Advanced', value: 'advanced' },
    { name: 'Pro', value: 'pro' }
  ];

  defaultDropdown: string = this.dropdownOptions[1].value;
  isFormSubmitted: boolean = false;

  onFormSubmit(form: NgForm) {
    this.isFormSubmitted = true;
    console.log('submit: ', form);
  }
}
