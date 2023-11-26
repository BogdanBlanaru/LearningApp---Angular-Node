import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalID = '';

  constructor(
    public modal: ModalService,
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    document.body.removeChild(this.el.nativeElement);
  }

  closeModal() {
    this.modal.toggleModal(this.modalID);
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey() {
    if (this.modal.isModalOpen(this.modalID)) this.closeModal();
  }
}
