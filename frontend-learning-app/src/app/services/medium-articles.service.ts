import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article, ArticleItems } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class MediumArticlesService {
  private apiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mgechev';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}`);
  }

  getListOfArticlesByTopicName(topic: string, articleItemsList: ArticleItems[]): ArticleItems[] | [] {
    return articleItemsList.filter(el => el.categories.includes(topic.toLowerCase()));
  }
}
