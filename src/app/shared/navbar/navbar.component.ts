import { Component, OnInit, Input, OnChanges, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'front-end-internship-assignment-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  query: string = '';
  isDark: boolean = false;
  filtersVisible: boolean = false;

  constructor(private router: Router, private themeService: ThemeService) {}

  onSearch(value: string) {
    this.router.navigate(['/search/', value, { limit: 10, offset: 0 }]);
  }

  public toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }

  toggleFilter() {
    this.filtersVisible = !this.filtersVisible;
  }

  ngOnInit(): void {
    this.themeService.theme$.subscribe((theme) => {
      if (theme === 'dark') {
        this.isDark = true;
      } else {
        this.isDark = false;
      }
    });

    this.router.events
      .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe((event) => {
        try {
          this.query = this.router.url.split('/')[2].split(';')[0];
        } catch (e) {
          this.query = '';
        }
      });
  }
}
