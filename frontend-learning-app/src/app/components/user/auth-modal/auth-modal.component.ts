import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../services/modal.service';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../../services/auth.service';

const MODALID = 'auth';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent, RegisterComponent, LoginComponent],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent implements OnInit, OnDestroy {
  isRegistered: boolean = true;

  constructor(
    public modalService: ModalService,
    protected auth: AuthService
  ) {}

  ngOnInit(): void {
    this.modalService.register(MODALID);
    const userData = JSON.parse(localStorage.getItem('LearningAppUserData')!);

    if (!userData) {
      this.modalService.toggleModal(MODALID);
    }
  }

  checkRegisteredUser(event: boolean) {
    this.isRegistered = event;
  }

  ngOnDestroy() {
    this.modalService.unregister(MODALID);
  }
}
