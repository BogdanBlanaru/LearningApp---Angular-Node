import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../../shared/modal/modal.component';
import { AddSubtopicFormComponent } from '../add-subtopic-form/add-subtopic-form.component';
import { ModalService } from '../../../../services/modal.service';

const MODALID = 'add-subtopic';

@Component({
  selector: 'app-add-subtopic-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent, AddSubtopicFormComponent],
  templateUrl: './add-subtopic-modal.component.html'
})
export class AddSubtopicModalComponent implements OnInit, OnDestroy {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.register(MODALID);
  }

  ngOnDestroy() {
    this.modalService.unregister(MODALID);
  }
}
