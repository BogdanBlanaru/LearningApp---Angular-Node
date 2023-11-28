import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SubtopicModalComponent } from './components/home/subtopics-list/subtopic-modal/subtopic-modal.component';
import { ModalService } from './services/modal.service';
import { MediumArticlesService } from './services/medium-articles.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, SubtopicModalComponent, HttpClientModule],
  providers: [ModalService, MediumArticlesService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-learning-app';
}
