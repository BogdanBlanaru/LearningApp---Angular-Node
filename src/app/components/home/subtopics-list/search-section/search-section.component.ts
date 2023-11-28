import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, fromEvent, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.scss'
})
export class SearchSectionComponent implements AfterViewInit, OnDestroy {
  protected searchedTitle: string = '';
  @Output() searchedValueSent = new EventEmitter<string>();
  private subscription = new Subscription();

  @ViewChild('subtopicsSearchValue') subtopicsSearchValue?: ElementRef;

  ngAfterViewInit(): void {
    if (this.subtopicsSearchValue) {
      this.subscription.add(
        fromEvent(this.subtopicsSearchValue.nativeElement as HTMLInputElement, 'keyup')
          .pipe(
            map((event: Event) => (event.target as HTMLInputElement).value),
            debounceTime(250),
            distinctUntilChanged()
          )
          .subscribe((text: string) => {
            this.searchedTitle = text.toLowerCase();
            this.searchedValueSent.emit(this.searchedTitle);
          })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
