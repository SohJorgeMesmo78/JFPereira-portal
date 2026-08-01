import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeName = 'dark-theme' | 'light-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themes: ThemeName[] = [
    'dark-theme',
    'light-theme'
  ];
  private readonly legacyThemes = [
    'futuristic-theme',
    'emerald-theme',
    'synthwave-theme',
    'ocean-theme'
  ];
  private readonly browserThemeColors: Record<ThemeName, string> = {
    'dark-theme': '#0c0e12',
    'light-theme': '#f8fafc'
  };
  private currentTheme: ThemeName = 'dark-theme';

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.loadTheme();
  }

  private loadTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (this.isThemeName(savedTheme)) {
        this.currentTheme = savedTheme;
      }
      this.applyTheme();
    }
  }

  public setTheme(theme: ThemeName): void {
    this.currentTheme = theme;
    this.applyTheme();
  }

  public getCurrentTheme(): ThemeName {
    return this.currentTheme;
  }

  private applyTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.classList.remove(...this.themes, ...this.legacyThemes);
      document.documentElement.classList.add(this.currentTheme);
      localStorage.setItem('theme', this.currentTheme);
      document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
        ?.setAttribute('content', this.browserThemeColors[this.currentTheme]);
    }
  }

  private isThemeName(theme: string | null): theme is ThemeName {
    return theme !== null && this.themes.some((availableTheme) => availableTheme === theme);
  }
}
