import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TabsetModel } from 'src/app/models/tabset.model';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsetComponent {
  @Input() tabsetArr!: TabsetModel;
  @Output() setTabComp: EventEmitter<string> = new EventEmitter<string>();

  setTab(tab: string) {
    this.setTabComp.emit(tab);
  }
}
