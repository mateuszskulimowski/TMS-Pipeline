import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NavigationModel } from 'src/app/models/navigation.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private _hamburgerNavigationSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public hamburgerNavigation$: Observable<boolean> =
    this._hamburgerNavigationSubject.asObservable();

  readonly navigationPanelName$: Observable<NavigationModel[]> = of([
    { name: 'Home', route: '/' },
    { name: 'Teams', route: '/teams' },
    { name: 'Projects', route: '/projects' },
    { name: 'Tasks', route: '/tasks' },
    { name: 'Employees', route: '/employees' },
  ]);

  showNavigation(): void {
    this._hamburgerNavigationSubject.value === false
      ? this._hamburgerNavigationSubject.next(true)
      : this._hamburgerNavigationSubject.next(false);
  }
  hideNavigation(): void {
    this._hamburgerNavigationSubject.next(false);
  }
}
