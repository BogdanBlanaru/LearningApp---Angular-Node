import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, map } from 'rxjs';
import { CarouselComponent } from '../../../shared/carousel/carousel.component';
import { CarouselResponsiveOptions } from '../../../models/carousel-responsive-options.model';
import { Article, ArticleItems } from '../../../models/article.model';
import { MediumArticlesService } from '../../../services/medium-articles.service';

@Component({
  selector: 'app-featured-articles',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './featured-articles.component.html',
  styleUrl: './featured-articles.component.scss'
})
export class FeaturedArticlesComponent implements OnInit, OnChanges, OnDestroy {
  @Input() topicName: string = '';
  autoplayInterval: number = 3000;
  responsiveOptions?: CarouselResponsiveOptions[];
  articles$: Observable<ArticleItems[]> = new Observable();
  articlesByTopic: ArticleItems[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private articlesService: MediumArticlesService) {
    this.articles$ = this.articlesService.getArticles().pipe(map((el: Article) => el.items));
  }

  ngOnInit(): void {
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
      this.subscription.add(
        this.articles$.subscribe((articles: ArticleItems[]) => {
          this.articlesByTopic = this.articlesService.getListOfArticlesByTopicName(this.topicName, articles);
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
