import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../shared/input/input.component';
import { AlertComponent } from '../../../shared/alert/alert.component';
import { AuthService } from '../../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterValidators } from '../validators/register-validators';
import User from '../../../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, InputComponent, AlertComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy {
  private subscription: Subscription = new Subscription();
  @Output() isRegistered = new EventEmitter<boolean>();

  constructor(private auth: AuthService) {}

  inSubmission = false;

  username = new FormControl('', [Validators.required, Validators.minLength(3)]);
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
      username: this.username,
      email: this.email,
      password: this.password,
      confirm_password: this.confirm_password
    },
    [RegisterValidators.match('password', 'confirm_password')]
  );

  public async register() {
    this.subscription.add(
      this.auth.createUser(this.registerForm.value as User).subscribe(
        () => {
          this.alertColor = 'green';
          this.alertMsg = 'Success! Your account has been created.';
          this.redirectToLoginForm();
        },
        error => {
          if (error.error.message.includes('duplicate key error collection')) {
            this.alertMsg = 'You have an account already. Please login';
          } else {
            this.alertMsg = 'An unexpected error occurred. Please try again later';
          }
          this.alertColor = 'red';
          this.inSubmission = false;
        }
      )
    );

    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created.';
    this.alertColor = 'blue';
    this.inSubmission = true;
  }

  redirectToLoginForm() {
    this.isRegistered.emit(true);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
