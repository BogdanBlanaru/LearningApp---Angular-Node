import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() modalID = '';

  constructor(public modal: ModalService) {}

  closeModal() {
    this.modal.toggleModal(this.modalID);
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey() {
    if (this.modal.isModalOpen(this.modalID)) this.closeModal();
  }
}
