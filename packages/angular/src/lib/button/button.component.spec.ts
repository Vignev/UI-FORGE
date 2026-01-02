/**
 * Button Component Tests (Angular)
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button element', () => {
    const button = compiled.querySelector('button');
    expect(button).toBeTruthy();
  });

  it('should apply default variant and size', () => {
    const button = compiled.querySelector('button');
    expect(button?.classList.contains('bg-primary-500')).toBe(true);
    expect(button?.classList.contains('h-10')).toBe(true);
  });

  it('should apply variant classes', () => {
    component.variant = 'secondary';
    fixture.detectChanges();

    const button = compiled.querySelector('button');
    expect(button?.classList.contains('bg-secondary-100')).toBe(true);
  });

  it('should apply size classes', () => {
    component.size = 'lg';
    fixture.detectChanges();

    const button = compiled.querySelector('button');
    expect(button?.classList.contains('h-12')).toBe(true);
  });

  it('should disable button when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();

    const button = compiled.querySelector('button');
    expect(button?.disabled).toBe(true);
  });

  it('should disable button when loading is true', () => {
    component.loading = true;
    fixture.detectChanges();

    const button = compiled.querySelector('button');
    expect(button?.disabled).toBe(true);
    expect(button?.getAttribute('aria-busy')).toBe('true');
  });

  it('should show loading spinner when loading', () => {
    component.loading = true;
    fixture.detectChanges();

    const spinner = compiled.querySelector('svg');
    expect(spinner).toBeTruthy();
    expect(spinner?.classList.contains('animate-spin')).toBe(true);
  });

  it('should apply full width class', () => {
    component.fullWidth = true;
    fixture.detectChanges();

    const button = compiled.querySelector('button');
    expect(button?.classList.contains('w-full')).toBe(true);
  });

  it('should emit clicked event on click', () => {
    let clickEvent: MouseEvent | null = null;
    component.clicked.subscribe((event: MouseEvent) => {
      clickEvent = event;
    });

    const button = compiled.querySelector('button');
    button?.click();

    expect(clickEvent).toBeTruthy();
  });

  it('should not emit clicked event when disabled', () => {
    let clickCount = 0;
    component.clicked.subscribe(() => {
      clickCount++;
    });

    component.disabled = true;
    fixture.detectChanges();

    const button = compiled.querySelector('button');
    button?.click();

    expect(clickCount).toBe(0);
  });

  it('should merge custom class with default classes', () => {
    component.class = 'custom-class';
    fixture.detectChanges();

    const button = compiled.querySelector('button');
    expect(button?.classList.contains('custom-class')).toBe(true);
    expect(button?.classList.contains('inline-flex')).toBe(true);
  });
});
