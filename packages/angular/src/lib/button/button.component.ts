/**
 * Button Component (Angular)
 * A versatile button component with multiple variants and sizes
 *
 * Theming: Override these CSS variables in your app to customize colors:
 * --uif-primary, --uif-primary-hover, --uif-primary-text
 * --uif-secondary, --uif-secondary-hover, --uif-secondary-text
 * --uif-outline-border, --uif-outline-text, --uif-outline-hover
 * --uif-ghost-text, --uif-ghost-hover
 * --uif-danger, --uif-danger-hover, --uif-danger-text
 */

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'uif-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() fullWidth: boolean = false;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() clicked = new EventEmitter<MouseEvent>();

  get buttonClass(): string {
    const classes = ['uif-btn', `uif-btn-${this.variant}`, `uif-btn-${this.size}`];
    if (this.fullWidth) classes.push('uif-btn-full');
    return classes.join(' ');
  }

  get isDisabled(): boolean {
    return this.disabled || this.loading;
  }

  handleClick(event: MouseEvent): void {
    if (!this.isDisabled) {
      this.clicked.emit(event);
    }
  }
}
