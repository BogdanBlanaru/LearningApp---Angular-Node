import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { AlertComponent } from '../../../shared/alert/alert.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../../shared/input/input.component';
import { RegisteredUser } from '../../../models/user.model';
import { Subscription } from 'rxjs';
import { ModalService } from '../../../services/modal.service';

const MODALID = 'auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, AlertComponent, InputComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnDestroy {
  private subscription: Subscription = new Subscription();
  @Output() isRegistered = new EventEmitter<boolean>();
  inSubmission = false;

  username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ]);

  showAlert = false;
  alertMsg = 'Please wait! We are logging you in.';
  alertColor = 'blue';

  loginForm = new FormGroup({
    username: this.username,
    password: this.password
  });

  constructor(
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  async login() {
    this.subscription.add(
      this.authService.login(this.loginForm.value as RegisteredUser).subscribe(
        res => {
          localStorage.setItem('LearningAppUserData', JSON.stringify(res));
          this.authService.loggedIn.next(JSON.parse(localStorage.getItem('LearningAppUserData')!));
          this.alertMsg = 'Success! You are now logged in.';
          this.alertColor = 'green';
          setTimeout(() => {
            this.modalService.toggleModal(MODALID);
          }, 2500);
        },
        error => {
          if (error.error.message === 'User not found!') {
            this.alertMsg = 'User not found. Please introduce your correct username';
          } else if (error.error.message === 'Wrong password or username!') {
            this.alertMsg = 'Wrong password. Please introduce your correct password';
          } else {
            this.alertMsg = 'An unexpected error occurred. Please try again later';
          }

          this.alertColor = 'red';
          this.inSubmission = false;
        }
      )
    );

    this.showAlert = true;
    this.alertMsg = 'Please wait! We are logging you in.';
    this.alertColor = 'blue';
    this.inSubmission = true;
  }

  goToRegisterForm() {
    this.isRegistered.emit(false);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
