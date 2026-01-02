import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ThemeService } from '@ui-forge/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  handleClick() {
    alert('Button clicked!');
  }

  handleConfirm() {
    if (confirm('Are you sure?')) {
      alert('Confirmed!');
    }
  }
}
