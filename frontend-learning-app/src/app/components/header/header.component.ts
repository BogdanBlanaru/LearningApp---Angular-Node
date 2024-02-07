import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import User from '../../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  username: string = '';
  private authSubscription: Subscription = new Subscription();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription.add(
      this.authService.isLoggedIn.subscribe(res => {
        this.username = (res as User)?.username;
      })
    );
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
