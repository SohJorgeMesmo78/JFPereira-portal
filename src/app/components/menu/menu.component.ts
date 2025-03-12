import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isMenuOpen = false;

  constructor(private themeService: ThemeService) {}

  trocarTema() {
    this.themeService.toggleTheme();
  }

  getCurrentThemeColor(): string {
    return this.themeService.getCurrentThemeColor();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const menuLinks = document.querySelector('.menu-links') as HTMLElement;
    if (this.isMenuOpen) {
      menuLinks.classList.add('open');
    } else {
      menuLinks.classList.remove('open');
    }
  }
}
