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
  filters: string[] = ['Open Search', 'Author', 'Title'];
  filter: string = 'Open Search';
  filtersVisible: boolean = false;

  constructor(private router: Router, private themeService: ThemeService) {}

  onSearch(value: string) {
    this.router.navigate([
      '/search/',
      value,
      { limit: 10, offset: 0, filter: this.filter },
    ]);
  }

  public toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }

  toggleFilter() {
    this.filtersVisible = !this.filtersVisible;
  }

  getFilterButtons() {
    return [
      document.getElementById('Open Search'),
      document.getElementById('Author'),
      document.getElementById('Title'),
    ];
  }

  selectFilter(filter: string) {
    this.filter = filter;
    this.getFilterButtons().forEach((element) => {
      element?.classList.remove('filter-button-selected');
    });
    if (filter === 'Open Search') {
      document
        .getElementById('Open Search')
        ?.classList.add('filter-button-selected');
    } else if (filter === 'Author') {
      document
        .getElementById('Author')
        ?.classList.add('filter-button-selected');
    } else if (filter === 'Title') {
      document.getElementById('Title')?.classList.add('filter-button-selected');
    }
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
        if (event.url.startsWith('/search')) {
          try {
            this.query = this.router.url.split('/')[2].split(';')[0];
          } catch (e) {
            this.query = '';
          }
          this.query = decodeURIComponent(this.query);
        }
      });
  }
}
