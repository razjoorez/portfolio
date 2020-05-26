import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

   detailsForm: FormGroup;
  constructor() { }

  ngOnInit() {
    let firstName = new FormControl('reza');
    let lastName = new FormControl('razjoo');
    let email = new FormControl('reza.razjoo@yahoo.com');
    this.detailsForm = new FormGroup(
      {
        firstName: firstName,
        lastName: lastName,
        email: email
      }
    )
  }

}
