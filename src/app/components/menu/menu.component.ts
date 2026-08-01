import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ThemeName, ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: false
})
export class MenuComponent {
  @ViewChild('menuLinks') private menuLinks?: ElementRef<HTMLElement>;
  @ViewChild('hamburgerButton') private hamburgerButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('themeMenu') private themeMenu?: ElementRef<HTMLElement>;
  @ViewChild('themeButton') private themeButton?: ElementRef<HTMLButtonElement>;

  isMenuOpen = false;
  isDropdownOpen = false;
  isScrolled = false;

  constructor(private themeService: ThemeService) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  changeTheme(theme: ThemeName): void {
    this.themeService.setTheme(theme);
    this.isDropdownOpen = false;
    this.themeButton?.nativeElement.focus();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  isCurrentTheme(theme: ThemeName): boolean {
    return this.themeService.getCurrentTheme() === theme;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 80;
  }

  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: MouseEvent): void {
    const target = event.target as Node;
    const menuLinks = this.menuLinks?.nativeElement;
    const hamburger = this.hamburgerButton?.nativeElement;
    const dropdown = this.themeMenu?.nativeElement;
    const themeToggleButton = this.themeButton?.nativeElement;

    if (this.isMenuOpen && menuLinks && !menuLinks.contains(target) && !hamburger?.contains(target)) {
      this.isMenuOpen = false;
    }

    if (this.isDropdownOpen && dropdown && !dropdown.contains(target) && !themeToggleButton?.contains(target)) {
      this.isDropdownOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  closeOpenMenus(): void {
    if (this.isDropdownOpen) {
      this.isDropdownOpen = false;
      this.themeButton?.nativeElement.focus();
    }

    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      this.hamburgerButton?.nativeElement.focus();
    }
  }
}
