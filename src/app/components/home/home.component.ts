import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { SubtopicsListComponent } from './subtopics-list/subtopics-list.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AsideMenuComponent, SubtopicsListComponent, FeaturedArticlesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  topicName: string = '';
  openedAsideMenu: boolean = false;

  getTopicName(event: string) {
    this.topicName = event;
  }

  getOpenedAsideMenuBoolean(event: boolean) {
    this.openedAsideMenu = event;
  }
}
