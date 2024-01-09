import { Injectable } from '@angular/core';
import { Observable, map, Subject } from 'rxjs';
import { SubTopic } from '../models/subtopic.model';
import { HttpClient } from '@angular/common/http';
import { Subcategory } from '../models/subcategory.model';

const BASEURL = 'http://localhost:8800';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  public subtopicsList?: SubTopic[];
  private listOfSubcategories?: string[] = [];

  protected listOfSubtopics: SubTopic[] = [];
  private readonly currentSubtopic = new Subject<SubTopic>();
  currentSubtopic$ = this.currentSubtopic.asObservable();

  constructor(private http: HttpClient) {}

  getListOfSubtopics(): Observable<SubTopic[]> {
    return this.http.get(`${BASEURL}/api/subtopicsList`).pipe(map(response => <SubTopic[]>(<unknown>response)));
  }

  createSubtopic(newSubtopic: SubTopic) {
    return this.http.post(`${BASEURL}/api/subtopicsList`, newSubtopic);
  }

  getListOfSubtopicsByTopicName(topic: string): SubTopic[] {
    const matchingSubtopics = this.subtopicsList?.filter(el => el.category.toUpperCase() === topic);

    if (matchingSubtopics) {
      this.listOfSubtopics = matchingSubtopics;
      return matchingSubtopics;
    }

    return [];
  }

  getListOfSubcategoriesByTopicName(topic: string): Subcategory[] {
    const matchingSubcategoriesList: Subcategory[] = [];
    this.listOfSubcategories = this.subtopicsList
      ?.filter(value => value.category.toLowerCase() === topic.toLowerCase())
      .map(item => item.subcategory)
      .filter((value, index, self) => self.indexOf(value) === index);

    const matchingSubcategories = this.listOfSubcategories?.map(el =>
      matchingSubcategoriesList.push({
        title: el,
        isOpen: false,
        subtopics: this.subtopicsList?.filter(subtopic => subtopic.subcategory === el)
      })
    );

    if (matchingSubcategories) {
      return matchingSubcategoriesList;
    }

    return [];
  }

  getSubtopicBySearchedValue(searchedValue: string): Subcategory[] {
    const matchingSubcategoriesList: Subcategory[] = [];
    const matchingSubcategories = this.listOfSubcategories?.map(el =>
      matchingSubcategoriesList.push({
        title: el,
        isOpen: true,
        subtopics: this.subtopicsList?.filter(
          subtopic =>
            subtopic.subcategory === el &&
            (subtopic.title.toLowerCase().includes(searchedValue) ||
              subtopic.description.toLowerCase().includes(searchedValue))
        )
      })
    );

    if (matchingSubcategories) {
      return matchingSubcategoriesList;
    }

    return [];
  }

  setCurrentSubtopic(subtopic: SubTopic) {
    this.currentSubtopic.next(subtopic);
  }
}
