import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({ selector: '[appTabContent]' })
export class TabContentDirective {
  @Input() tab!: string;
  constructor(public templateRef: TemplateRef<any>) {}
}
