import { SubTopic } from './subtopic.model';

export interface Subcategory {
  title: string | undefined;
  isOpen: boolean;
  subtopics?: SubTopic[];
}
