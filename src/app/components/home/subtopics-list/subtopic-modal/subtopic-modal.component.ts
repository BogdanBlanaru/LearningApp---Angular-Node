import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../../services/modal.service';
import { ModalComponent } from '../../../../shared/modal/modal.component';
import { TopicService } from '../../../../services/topic.service';
import { SubTopic } from '../../../../models/subtopic.model';
import { Subscription } from 'rxjs';

const MODALID = 'subtopic';

@Component({
  selector: 'app-subtopic-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './subtopic-modal.component.html',
  styleUrl: './subtopic-modal.component.scss'
})
export class SubtopicModalComponent implements OnInit, OnDestroy {
  private subscription$ = new Subscription();
  currentSubtopic?: SubTopic;

  constructor(
    private modalService: ModalService,
    private topicService: TopicService
  ) {}

  ngOnInit(): void {
    this.modalService.register(MODALID);
    this.subscription$ = this.topicService.currentSubtopic$.subscribe((subtopic: SubTopic) => {
      this.currentSubtopic = subtopic;
    });
  }

  ngOnDestroy() {
    this.modalService.unregister(MODALID);
    this.subscription$.unsubscribe();
  }
}
