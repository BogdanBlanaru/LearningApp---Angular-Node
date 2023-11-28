import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtopicComponent } from './subtopic/subtopic.component';
import { TopicService } from '../../../services/topic.service';
import { SubTopic } from '../../../models/subtopic.model';
import { SearchSectionComponent } from './search-section/search-section.component';

@Component({
  selector: 'app-subtopics-list',
  standalone: true,
  imports: [CommonModule, SubtopicComponent, SearchSectionComponent],
  templateUrl: './subtopics-list.component.html',
  styleUrl: './subtopics-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubtopicsListComponent implements OnChanges {
  @Input() topicName: string = '';
  protected subtopics?: SubTopic[];
  protected searchedSubtopic?: string;

  constructor(private topicService: TopicService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['topicName'] && !changes['topicName'].firstChange) {
      this.subtopics = this.topicService.getListOfSubtopicsByTopicName(this.topicName);
    }
  }

  searchSubtopic(event: string) {
    this.searchedSubtopic = event.trim();

    if (this.searchedSubtopic.length > 0) {
      this.subtopics = this.topicService.getSubtopicBySearchedValue(this.searchedSubtopic, this.topicName);
    } else {
      this.subtopics = this.topicService.getListOfSubtopicsByTopicName(this.topicName);
    }
  }
}
