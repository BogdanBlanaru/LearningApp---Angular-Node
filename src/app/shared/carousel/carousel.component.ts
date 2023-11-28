import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ArticleItems } from '../../models/article.model';
import { CarouselResponsiveOptions } from '../../models/carousel-responsive-options.model';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent {
  @Input() topicName: string = '';
  @Input() cardItems: ArticleItems[] | [] = [];
  @Input() autoplayInterval: number = 3000;
  @Input() responsiveOptions?: CarouselResponsiveOptions[];

  isCarouselOpen(): boolean {
    return !!this.cardItems.length;
  }

  navigateToMediumLink(link: string): void {
    window.open(link, '_blank');
  }
}
