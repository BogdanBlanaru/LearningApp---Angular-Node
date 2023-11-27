import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { MediumArticlesService } from '../../services/medium-articles.service';
import { Article, ArticleItems } from '../../models/article.model';
import { map, Observable, shareReplay, Subscription } from 'rxjs';

interface ResponsiveOptions {
  breakpoint: string;
  numVisible: number;
  numScroll: number;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit, OnChanges, OnDestroy {
  private subscription: Subscription = new Subscription();

  @Input() topicName: string = '';

  autoplayInterval: number = 3000;
  responsiveOptions?: ResponsiveOptions[];
  articles$: Observable<ArticleItems[]> = new Observable();
  articlesByTopic: ArticleItems[] = [];

  constructor(private articlesService: MediumArticlesService) {
    this.articles$ = this.articlesService.getArticles().pipe(
      map((el: Article) => el.items),
      shareReplay(1)
    );
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
      this.subscription.add(
        this.articles$.subscribe((articles: ArticleItems[]) => {
          this.articlesByTopic = this.articlesService.getListOfArticlesByTopicName(this.topicName, articles);
        })
      );
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
