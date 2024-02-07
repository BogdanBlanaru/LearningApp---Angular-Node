import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { SubtopicsListComponent } from './subtopics-list/subtopics-list.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import User from '../../models/user.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AsideMenuComponent,
    SubtopicsListComponent,
    FeaturedArticlesComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  topicName: string = '';
  openedAsideMenu: boolean = false;
  isStarted: boolean = false;
  isLoggedIn: boolean | User = false;
  userData: boolean | User = JSON.parse(localStorage.getItem('LearningAppUserData')!);
  private authSubscription: Subscription = new Subscription();
  @Output() hasStarted = new EventEmitter<boolean>();

  constructor(private authService: AuthService) {}

  getTopicName(event: string) {
    this.topicName = event;
  }

  getOpenedAsideMenuBoolean(event: boolean) {
    this.openedAsideMenu = event;
  }

  getStarted() {
    this.isStarted = true;
    this.authService.loggedIn.next(this.userData);
    this.authSubscription.add(
      this.authService.isLoggedIn.subscribe(res => {
        this.isLoggedIn = res;
      })
    );
    this.hasStarted.emit(this.isStarted);
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
