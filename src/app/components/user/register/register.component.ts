import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../shared/input/input.component';
import { AlertComponent } from '../../../shared/alert/alert.component';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterValidators } from '../validators/register-validators';
import User from '../../../models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, InputComponent, AlertComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private auth: AuthService) {}

  inSubmission = false;

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ]);
  confirm_password = new FormControl('', [Validators.required]);

  showAlert = false;
  alertMsg = 'Please wait! Your account is being created.';
  alertColor = 'blue';

  registerForm = new FormGroup(
    {
      name: this.name,
      email: this.email,
      password: this.password,
      confirm_password: this.confirm_password
    },
    [RegisterValidators.match('password', 'confirm_password')]
  );

  public async register() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created.';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      this.auth.createUser(this.registerForm.value as User).subscribe(el => {
        console.log(el);
      });
    } catch (e) {
      this.alertMsg = 'An unexpected error occurred. Please try again later';
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }

    this.alertColor = 'green';
    this.alertMsg = 'Success! Your account has been created.';
  }
}
