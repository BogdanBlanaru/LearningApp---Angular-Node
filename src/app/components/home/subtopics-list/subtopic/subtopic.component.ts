import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubTopic } from '../../../../models/subtopic.model';
import { ModalService } from '../../../../services/modal.service';
import { TopicService } from '../../../../services/topic.service';

const MODALID = 'subtopic';
@Component({
  selector: 'app-subtopic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subtopic.component.html',
  styleUrl: './subtopic.component.scss'
})
export class SubtopicComponent {
  @Input() subtopicName?: SubTopic;

  constructor(
    private modalService: ModalService,
    private topicService: TopicService
  ) {}

  openSubtopicModal() {
    if (this.subtopicName) {
      this.topicService.setCurrentSubtopic(this.subtopicName);
      this.modalService.toggleModal(MODALID);
    }
  }
}
