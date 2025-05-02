import { Component, signal } from '@angular/core';

@Component({
  selector: 'todo-hero',
  standalone: true,
  imports: [],
  templateUrl: './todo-hero.component.html',
})
export class HeroComponent {
  isDarkMode = signal<boolean>(false);

  constructor() {

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode.set(savedTheme === 'dark');
    } else {
      this.isDarkMode.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode.update(mode => !mode);
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
  }

  private applyTheme() {
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}