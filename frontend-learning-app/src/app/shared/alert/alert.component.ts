import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  @Input() color = 'blue';

  get bgColor() {
    if (this.color === 'green') {
      return `bg-green-400`;
    } else if (this.color === 'red') {
      return `bg-red-400`;
    } else {
      return `bg-blue-400`;
    }
  }
}
