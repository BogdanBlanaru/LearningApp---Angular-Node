import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Topic } from '../../../models/topic.model';
import { TopicService } from '../../../services/topic.service';
import { ModalService } from '../../../services/modal.service';

const MODALID = 'add-subtopic';

@Component({
  selector: 'app-aside-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.scss'
})
export class AsideMenuComponent implements OnInit {
  protected isOpen: boolean = false;
  protected selectedTopic?: string;
  protected topicsList?: Topic[];
  @Output() topicName = new EventEmitter<string>();
  @Output() openedAsideMenu = new EventEmitter<boolean>();

  constructor(
    private topicService: TopicService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.topicsList = this.topicService.getListOfTopics();
    this.topicService.getListOfSubtopics().subscribe(el => (this.topicService.subtopicsList = el));
  }

  toggleAsideMenu() {
    this.isOpen = !this.isOpen;
    this.selectedTopic = '';
    this.sendTopicNameToParentComponent('');
    this.openedAsideMenu.emit(this.isOpen);
  }

  selectTopic(topic: string) {
    this.selectedTopic = topic;
    this.sendTopicNameToParentComponent(topic);
  }

  sendTopicNameToParentComponent(topic: string) {
    this.topicName.emit(topic);
  }

  openAddSubtopicModal() {
    this.modalService.toggleModal(MODALID);
  }
}
