import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatus = ['Stable', 'Critical', 'Finished'];

  userForm: FormGroup

  nameValidator = (control: FormControl): { [s: string]: boolean } => {
    if(control.value === 'Test') {
      return { 'invalidFormName': true}
    } else {
      return null;
    }
  };

  nameValidatorAsync = (control: FormControl): Promise<any> => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ 'invalidFormName': true });
        }
        resolve(null);
      }, 1500)
    })
    return promise;
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectName': new FormControl(null, [Validators.required, this.nameValidator], this.nameValidatorAsync),
      'projectStatus': new FormControl('Critical')
    });
  }

  onFormSubmit() {
    console.log('form: ', this.userForm);
  }
}
