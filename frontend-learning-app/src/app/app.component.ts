import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SubtopicModalComponent } from './components/home/subtopics-list/subtopic-modal/subtopic-modal.component';
import { ModalService } from './services/modal.service';
import { MediumArticlesService } from './services/medium-articles.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthModalComponent } from './components/user/auth-modal/auth-modal.component';
import { AuthService } from './services/auth.service';
import { AddSubtopicModalComponent } from './components/home/add-subtopic/add-subtopic-modal/add-subtopic-modal.component';
import { TopicService } from './services/topic.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    AuthModalComponent,
    SubtopicModalComponent,
    AddSubtopicModalComponent,
    HttpClientModule
  ],
  providers: [ModalService, MediumArticlesService, TopicService, AuthService],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'frontend-learning-app';
  isStarted: boolean = false;

  getIsStarted(event: boolean) {
    this.isStarted = event;
  }
}
