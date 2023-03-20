import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { UserIntake } from 'src/app/models/user-intake-model';
import { UserIntakeService } from 'src/app/services/user-intake.service';

@Component({
  selector: 'app-user-intake',
  templateUrl: './user-intake.component.html',
  styleUrls: ['./user-intake.component.css']
})
export class UserIntakeComponent {
  userIntakeForm!: FormGroup;

  constructor(
    private userIntakeService: UserIntakeService,
    private formBuilder: FormBuilder
  ) {}

  createForm() {
    this.userIntakeForm = this.formBuilder.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      city: [''],
      state: [''],
      phone: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  getStateCodeOptions(): string[] {
    return [
      'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
    'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN',
    'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH',
    'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA',
    'WV', 'WI', 'WY',
    ];
  }

  onSubmit(): void {
    const formValues = this.userIntakeForm.value;

    const user: UserIntake = {
      id: formValues.id,
      firstName: formValues.firstName,
      middleName: formValues.middleName,
      lastName: formValues.lastName,
      city: formValues.city,
      state: formValues.state,
      phone: formValues.phone,
      email: formValues.email
    };
    // TODO: Send the new work experience object to the server to save it to the database
    this.addUser(user);
  }
  
  addUser(user: UserIntake): void {
    let id: number = 0;
    this.userIntakeService.addUser(user)
        .subscribe( createdUser => {
          id = createdUser.id;
          if(id != 0) {
            window.location.href = "/dashboard/" + id;
          }
        });
  }


}
