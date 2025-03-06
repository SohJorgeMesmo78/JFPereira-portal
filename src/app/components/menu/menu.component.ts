import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private themeService: ThemeService) {}

  trocarTema() {
    this.themeService.toggleTheme();
  }

  getCurrentThemeColor(): string {
    return this.themeService.getCurrentThemeColor();
  }
}
