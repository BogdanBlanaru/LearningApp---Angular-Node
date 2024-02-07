import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../services/modal.service';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../../services/auth.service';
import User from '../../../models/user.model';

const MODALID = 'auth';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent, RegisterComponent, LoginComponent],
  templateUrl: './auth-modal.component.html'
})
export class AuthModalComponent implements OnInit, OnChanges, OnDestroy {
  isRegistered: boolean = true;
  userData?: User;
  @Input() isStarted!: boolean;

  constructor(
    public modalService: ModalService,
    protected auth: AuthService
  ) {}

  ngOnInit(): void {
    this.modalService.register(MODALID);
    this.userData = JSON.parse(localStorage.getItem('LearningAppUserData')!);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isStarted']) {
      if (!this.userData && this.isStarted) {
        this.modalService.toggleModal(MODALID);
      }
    }
  }

  checkRegisteredUser(event: boolean) {
    this.isRegistered = event;
  }

  ngOnDestroy() {
    this.modalService.unregister(MODALID);
  }
}
