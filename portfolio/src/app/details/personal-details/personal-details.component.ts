import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

   detailsForm: FormGroup;
  constructor() { }

  ngOnInit() {
    let firstName = new FormControl('John', [Validators.required, Validators.minLength(1)]);
    let lastName = new FormControl('smith', [Validators.required, Validators.minLength(1)]);
    let email = new FormControl('someone@yaaa.com', Validators.required);
    let password =  new FormControl('', Validators.required)
    this.detailsForm = new FormGroup(
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      }
    )
  }

  Save(formValue) {
    if(this.detailsForm.valid){
    alert(formValue.firstName);
    }else {
      alert('form incomplete')
    }
  }

}
