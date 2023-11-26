import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ArticlesService } from '../../services/articles.service';
import { Article, ArticleItems } from '../../models/article.model';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, OnChanges, OnDestroy {
  @Input() topicName: string = '';
  autoplayInterval: number = 3000;
  responsiveOptions: any[] | undefined;
  articles$: Observable<ArticleItems[] | []> = new Observable();
  articlesByTopic: ArticleItems[] | [] = [];
  private subscription: Subscription = new Subscription();

  constructor(private articlesService: ArticlesService) {
    this.articles$ = this.articlesService
      .getArticles()
      .pipe(map((el: Article) => el.items.map((article: ArticleItems) => article)));
  }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['topicName']) {
      this.subscription = this.articles$.subscribe((articles: ArticleItems[]) => {
        this.articlesByTopic = this.articlesService.getListOfArticlesByTopicName(this.topicName, articles);
      });
    }
  }

  isCarouselOpen(): boolean {
    return !!this.articlesByTopic.length;
  }

  navigateToMediumLink(link: string): void {
    window.open(link, '_blank');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
