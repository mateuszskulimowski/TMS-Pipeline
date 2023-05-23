import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { TabsetModel } from 'src/app/models/tabset.model';

@Directive({ selector: '[tabset]' })
export class TabsetDirective {
  @Input() tabset!: Observable<TabsetModel[]>;
  @Input() tabClick!: string;
  @Output() setTabset: EventEmitter<TabsetModel[]> = new EventEmitter<
    TabsetModel[]
  >();
  @HostListener('click') onClick() {
    this.tabset
      .pipe(
        take(1),
        map((tab) => {
          return tab.map((t) => {
            if (t.title === this.tabClick && t.isActive) {
              return t;
            }
            if (t.title === this.tabClick && !t.isActive) {
              return { title: t.title, isActive: true };
            }

            if (t.title !== this.tabClick && t.isActive) {
              return { title: t.title, isActive: false };
            }
            return t;
          });
        })
      )
      .subscribe((tabsets) => this.setTabset.emit(tabsets));
  }
}
