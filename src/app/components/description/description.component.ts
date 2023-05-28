import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent {
  @Input() title!: string;
  @Input() text!: string;
  @Input() isAvatar!: boolean;
}
