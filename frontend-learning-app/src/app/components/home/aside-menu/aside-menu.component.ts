import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicService } from '../../../services/topic.service';
import { ModalService } from '../../../services/modal.service';
import { Subscription } from 'rxjs';

const MODALID = 'add-subtopic';

@Component({
  selector: 'app-aside-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.scss'
})
export class AsideMenuComponent implements OnInit, OnDestroy {
  protected isOpen: boolean = false;
  protected selectedTopic?: string;
  protected topicsList?: string[];
  private subscription = new Subscription();
  @Output() topicName = new EventEmitter<string>();
  @Output() openedAsideMenu = new EventEmitter<boolean>();

  constructor(
    private topicService: TopicService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.topicService.getListOfSubtopics().subscribe(el => {
        this.topicService.subtopicsList = el;
        this.topicsList = this.topicService.subtopicsList
          .map(item => item.category.toUpperCase())
          .filter((value, index, self) => self.indexOf(value) === index);
      })
    );
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
