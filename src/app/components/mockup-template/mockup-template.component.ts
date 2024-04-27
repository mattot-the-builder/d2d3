import { Component, Input } from '@angular/core';
import {
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
  HlmCardDescriptionDirective,
  HlmCardContentDirective,
  HlmCardFooterDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
  selector: 'app-mockup-template',
  standalone: true,
  imports: [HlmButtonDirective, HlmCardDirective, HlmCardHeaderDirective, HlmCardTitleDirective, HlmCardDescriptionDirective, HlmCardContentDirective, HlmCardFooterDirective, HlmInputDirective,],
  templateUrl: './mockup-template.component.html',
  styleUrl: './mockup-template.component.css'
})
export class MockupTemplateComponent {
  @Input() variant: 'short-sleeve' | 'long-sleeve' | 't-shirt' = 't-shirt';
  @Input() cardTitle = 'Card Title';

  getCardClass() {
    switch (this.variant) {
      case 'short-sleeve':
        return 'h-36';
      case 'long-sleeve':
        return 'h-52';
      case 't-shirt':
        return 'h-72';
      default:
        return 'h-72';
    }
  }
}
