import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[percentageProgresbar]' })
export class PercentageProgresbarDirective implements OnInit {
  @Input() percentageProgresbar!: number;
  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {}
  ngOnInit(): void {
    this._renderer2.setStyle(
      this._elementRef.nativeElement,
      'width',
      `${this.percentageProgresbar}%`
    );
  }
}
