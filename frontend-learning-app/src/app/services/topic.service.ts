import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SubTopic } from '../models/subtopic.model';
import { Topic } from '../models/topic.model';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  TOPICSLIST: Topic[] = [
    {
      name: 'HTML',
      subtopic: [
        {
          id: 1,
          title: 'What is HTML?',
          description: 'Lorem Ipsum is simply Bogdan dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },
        {
          id: 2,
          title: 'What is HTML?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys Radu standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 3,
          title: 'What is HTML?',
          description: 'Lorem Ipsum is simply dummy text of Stefan the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 4,
          title: 'What is HTML?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard Catalin Rauta dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        }
      ]
    },
    {
      name: 'CSS/SCSS',
      subtopic: [
        {
          id: 5,
          title: 'What is CSS/SCSS?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 6,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 7,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 8,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        }
      ]
    },
    {
      name: 'JAVASCRIPT',
      subtopic: [
        {
          id: 9,
          title: 'What is JAVASCRIPT?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 10,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 11,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 12,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        }
      ]
    },
    {
      name: 'ANGULAR',
      subtopic: [
        {
          id: 13,
          title: 'What is ANGULAR?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 14,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 15,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 16,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        }
      ]
    },
    {
      name: 'REACT',
      subtopic: [
        {
          id: 17,
          title: 'What is REACT?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 18,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 19,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 20,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        }
      ]
    },
    {
      name: 'JAVA',
      subtopic: [
        {
          id: 21,
          title: 'What is JAVA?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 22,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 23,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
          id: 24,
          title: 'What is Lorem Ipsum?',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          content:
            'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        }
      ]
    }
  ];

  protected listOfSubtopics: SubTopic[] = [];
  private readonly currentSubtopic = new Subject<SubTopic>();
  currentSubtopic$ = this.currentSubtopic.asObservable();

  constructor() {}

  getListOfTopics(): Topic[] {
    return this.TOPICSLIST;
  }

  getListOfSubtopicsByTopicName(topic: string): SubTopic[] {
    const matchingTopic = this.TOPICSLIST.find(el => el.name === topic);

    if (matchingTopic) {
      this.listOfSubtopics = matchingTopic.subtopic;
      return this.listOfSubtopics;
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
  getSubtopicById(id: number): SubTopic {
    return this.listOfSubtopics.find(el => el.id === id)!;
  }
}
