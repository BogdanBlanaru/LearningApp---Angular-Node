import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../shared/carousel/carousel.component';

@Component({
  selector: 'app-featured-articles',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './featured-articles.component.html',
  styleUrl: './featured-articles.component.scss'
})
export class FeaturedArticlesComponent {
  @Input() topicName: string = '';
}
