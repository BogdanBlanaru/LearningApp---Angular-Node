import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Input() control: UntypedFormControl = new UntypedFormControl();
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() format = '';

  constructor() {}
}
