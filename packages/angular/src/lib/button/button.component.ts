/**
 * Button Component (Angular)
 * A versatile button component with multiple variants and sizes
 */

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '@ui-forge/core';
import { buttonVariants } from './button.variants';
import type { ButtonVariants } from './button.variants';

@Component({
  selector: 'uif-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  /**
   * Visual style variant
   */
  @Input() variant: ButtonVariants['variant'] = 'primary';

  /**
   * Button size
   */
  @Input() size: ButtonVariants['size'] = 'md';

  /**
   * Full width button
   */
  @Input() fullWidth: boolean = false;

  /**
   * Disabled state
   */
  @Input() disabled: boolean = false;

  /**
   * Loading state
   */
  @Input() loading: boolean = false;

  /**
   * Button type
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Additional CSS classes
   */
  @Input() class: string = '';

  /**
   * Click event emitter
   */
  @Output() clicked = new EventEmitter<MouseEvent>();

  /**
   * Get computed button classes
   */
  get buttonClasses(): string {
    return cn(
      buttonVariants({
        variant: this.variant,
        size: this.size,
        fullWidth: this.fullWidth,
      }),
      this.class
    );
  }

  /**
   * Check if button is disabled
   */
  get isDisabled(): boolean {
    return this.disabled || this.loading;
  }

  /**
   * Handle button click
   */
  handleClick(event: MouseEvent): void {
    if (!this.isDisabled) {
      this.clicked.emit(event);
    }
  }
}
