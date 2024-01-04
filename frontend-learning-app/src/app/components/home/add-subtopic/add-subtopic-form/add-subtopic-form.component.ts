import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../../shared/input/input.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../../../../shared/alert/alert.component';
import { SubTopic } from '../../../../models/subtopic.model';
import { TopicService } from '../../../../services/topic.service';

@Component({
  selector: 'app-add-subtopic-form',
  standalone: true,
  imports: [CommonModule, InputComponent, AlertComponent],
  templateUrl: './add-subtopic-form.component.html',
  styleUrl: './add-subtopic-form.component.scss'
})
export class AddSubtopicFormComponent {
  private subscription: Subscription = new Subscription();

  constructor(private topicService: TopicService) {}

  inSubmission = false;

  title = new FormControl('', [Validators.required, Validators.minLength(3)]);
  category = new FormControl('', [Validators.required, Validators.minLength(3)]);
  subcategory = new FormControl('', [Validators.minLength(3)]);
  description = new FormControl('', [Validators.required, Validators.minLength(5)]);
  content: FormControl = new FormControl('', [Validators.required, Validators.minLength(10)]);

  showAlert = false;
  alertMsg = 'Please wait! Your subtopic is being created.';
  alertColor = 'blue';

  addSubtopicForm = new FormGroup({
    title: this.title,
    category: this.category,
    subcategory: this.subcategory,
    description: this.description,
    content: this.content
  });

  public async addSubtopic() {
    this.subscription.add(
      this.topicService.createSubtopic(this.addSubtopicForm.value as SubTopic).subscribe(
        () => {
          this.alertColor = 'green';
          this.alertMsg = 'Success! Your subtopic has been created.';
          this.addSubtopicForm.reset();
          this.resetButtonAndAlert();
        },
        error => {
          if (error.error.message.includes('duplicate key error collection')) {
            this.alertMsg = 'You have this subtopic already. Please create another one!';
          } else {
            this.alertMsg = 'An unexpected error occurred. Please try again later';
          }
          this.alertColor = 'red';
          this.inSubmission = false;
        }
      )
    );

    this.showAlert = true;
    this.alertMsg = 'Please wait! Your subtopic is being created.';
    this.alertColor = 'blue';
    this.inSubmission = true;
  }

  private resetButtonAndAlert() {
    this.inSubmission = false;

    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
