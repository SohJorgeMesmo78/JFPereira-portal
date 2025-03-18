import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isMenuOpen = false;
  isDropdownOpen = false;

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

  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: MouseEvent) {
    const menuLinks = document.querySelector('.menu-links');
    const hamburger = document.querySelector('.hamburger-menu');
    const dropdown = document.querySelector('.theme-dropdown');
    const themeCircle = document.querySelector('.theme-circle');

    // Se clicar fora do menu, ele fecha
    if (this.isMenuOpen && menuLinks && !menuLinks.contains(event.target as Node) && !hamburger?.contains(event.target as Node)) {
      this.isMenuOpen = false;
    }

    // Se clicar fora do dropdown de temas, ele fecha
    if (this.isDropdownOpen && dropdown && !dropdown.contains(event.target as Node) && !themeCircle?.contains(event.target as Node)) {
      this.isDropdownOpen = false;
    }
  }

  getCurrentThemeColor(): string {
    return this.themeService.getCurrentThemeColor();
  }
}
