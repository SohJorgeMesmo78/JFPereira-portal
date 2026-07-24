import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: false
})
export class MenuComponent {
  isMenuOpen = false;
  isDropdownOpen = false;
  isScrolled = false;

  constructor(private themeService: ThemeService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  changeTheme(theme: string) {
    this.themeService.setTheme(theme);
    this.isDropdownOpen = false;
  }

  scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 80;
  }

  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: MouseEvent) {
    const menuLinks = document.querySelector('.menu-links');
    const hamburger = document.querySelector('.hamburger-menu');
    const dropdown = document.querySelector('.theme-dropdown');
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');

    if (this.isMenuOpen && menuLinks && !menuLinks.contains(event.target as Node) && !hamburger?.contains(event.target as Node)) {
      this.isMenuOpen = false;
    }

    if (this.isDropdownOpen && dropdown && !dropdown.contains(event.target as Node) && !themeToggleBtn?.contains(event.target as Node)) {
      this.isDropdownOpen = false;
    }
  }

  getCurrentThemeColor(): string {
    return this.themeService.getCurrentThemeColor();
  }
}
