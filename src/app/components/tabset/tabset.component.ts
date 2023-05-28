import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TabContentDirective } from 'src/app/directives/tab-content/tab-content.directive';
import { TabsetModel } from 'src/app/models/tabset.model';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsetComponent implements AfterContentInit {
  @ContentChildren(TabContentDirective)
  tabsetContent!: QueryList<TabContentDirective>;
  @Input() tabs!: string[] | null;
  @Input() activeTab!: string;

  ngAfterContentInit(): void {
    if (this.tabs && this.tabs.length > 0) {
      this.activeTab = this.tabs[0];
    } else {
      this.activeTab = '';
    }
  }

  onSwitchTab(tab: string): void {
    this.activeTab = tab;
  }
  getContent(tab: string) {
    const content = this.tabsetContent.find((item) => item.tab === tab);
    return content ? content.templateRef : null;
  }
}
