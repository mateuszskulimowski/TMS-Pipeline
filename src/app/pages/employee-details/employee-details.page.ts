import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TabsetModel } from '../../models/tabset.model';

@Component({
  selector: 'app-employee-details-page',
  templateUrl: './employee-details.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsPage {
  private _tabTitlesSubject: BehaviorSubject<TabsetModel[]> =
    new BehaviorSubject<TabsetModel[]>([
      { title: 'Teams', isActive: true },
      { title: 'Projects', isActive: false },
    ]);
  public tabTitles$: Observable<TabsetModel[]> =
    this._tabTitlesSubject.asObservable();
  private _tabsetActiveSubject: BehaviorSubject<TabsetModel> =
    new BehaviorSubject<TabsetModel>({ title: 'Teams', isActive: true });
  public tabsetActive$: Observable<TabsetModel> =
    this._tabsetActiveSubject.asObservable();

  change($event: TabsetModel[]) {
    $event.map((tab) => {
      if (tab.isActive) {
        this._tabsetActiveSubject.next(tab);
      }
    });
    // console.log(this._tabsetActiveSubject.value);
    this._tabTitlesSubject.next($event);
  }
}
