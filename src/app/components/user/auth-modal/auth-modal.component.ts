import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../services/modal.service';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent, RegisterComponent, LoginComponent],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.register('auth');
  }

  ngOnDestroy() {
    this.modalService.unregister('auth');
  }
}
