import { Injectable } from '@angular/core';
import { Observable, map, Subject } from 'rxjs';
import { SubTopic } from '../models/subtopic.model';
import { Topic } from '../models/topic.model';
import { HttpClient } from '@angular/common/http';

const BASEURL = 'http://localhost:8800';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  public subtopicsList?: SubTopic[];
  TOPICSLIST: Topic[] = [
    {
      name: 'HTML'
    },
    {
      name: 'CSS/SCSS'
    },
    {
      name: 'JAVASCRIPT'
    },
    {
      name: 'ANGULAR'
    },
    {
      name: 'REACT'
    },
    {
      name: 'JAVA'
    }
  ];

  protected listOfSubtopics: SubTopic[] = [];
  private readonly currentSubtopic = new Subject<SubTopic>();
  currentSubtopic$ = this.currentSubtopic.asObservable();

  constructor(private http: HttpClient) {}

  getListOfTopics(): Topic[] {
    return this.TOPICSLIST;
  }

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

  getSubtopicBySearchedValue(searchedValue: string, topicName: string): SubTopic[] | [] {
    return this.listOfSubtopics.filter(
      el =>
        el.title.toLowerCase().includes(searchedValue) ||
        el.description.toLowerCase().includes(searchedValue) ||
        el.content.toLowerCase().includes(searchedValue)
    );
  }

  setCurrentSubtopic(subtopic: SubTopic) {
    this.currentSubtopic.next(subtopic);
  }

  // Maybe it will be used
  // getSubtopicById(id: number): SubTopic {
  //   return this.listOfSubtopics.find(el => el.id === id)!;
  // }
}
