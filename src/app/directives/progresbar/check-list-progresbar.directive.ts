import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { CheckListItemModel } from 'src/app/models/check-list-item.model';

@Directive({ selector: '[checkListProgresbar]' })
export class CheckListProgresbarDirective implements OnInit {
  @Input() checkListProgresbar!: string[];
  @Input() checkListsProgres!: CheckListItemModel[];

  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {}
  ngOnInit(): void {
    const checkListDoneLength = this.checkListsProgres
      .filter((check) => this.checkListProgresbar.includes(check.id))
      .filter((val) => val.isDone).length;
    this._renderer2.setStyle(
      this._elementRef.nativeElement,
      'width',
      `${(checkListDoneLength * 100) / this.checkListProgresbar.length}%`
    );
    if (checkListDoneLength / this.checkListProgresbar.length === 1) {
      this._renderer2.addClass(this._elementRef.nativeElement, 'bg-success');
    } else if (checkListDoneLength / this.checkListProgresbar.length <= 1 / 3) {
      this._renderer2.addClass(this._elementRef.nativeElement, 'bg-danger');
    } else {
      this._renderer2.addClass(this._elementRef.nativeElement, 'bg-warning');
    }
  }
}
