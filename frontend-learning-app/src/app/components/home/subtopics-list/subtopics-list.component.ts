import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtopicComponent } from './subtopic/subtopic.component';
import { TopicService } from '../../../services/topic.service';
import { SearchSectionComponent } from './search-section/search-section.component';
import { Subcategory } from '../../../models/subcategory.model';

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
  protected subcategoriesList?: Subcategory[];
  protected searchedSubtopic?: string;

  constructor(private topicService: TopicService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['topicName'] && !changes['topicName'].firstChange) {
      this.subcategoriesList = this.topicService.getListOfSubcategoriesByTopicName(this.topicName);
    }
  }

  searchSubtopic(event: string) {
    this.searchedSubtopic = event.trim();

    if (this.searchedSubtopic.length > 0) {
      this.subcategoriesList = this.topicService.getSubtopicBySearchedValue(this.searchedSubtopic);
    } else {
      this.subcategoriesList = this.topicService.getListOfSubcategoriesByTopicName(this.topicName);
    }
  }

  toggleSubcategory(subcategory?: string) {
    const modifiedSubcategories = this.subcategoriesList?.map(el =>
      el?.title?.toLowerCase() === subcategory?.toLowerCase() ? { ...el, isOpen: !el.isOpen } : el
    );
    this.subcategoriesList = modifiedSubcategories;
  }
}
