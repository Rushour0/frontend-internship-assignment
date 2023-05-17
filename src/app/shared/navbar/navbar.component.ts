import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'front-end-internship-assignment-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  query: string = '';
  constructor(private router: Router) {}

  onSearch(value: string) {
    this.router.navigate(['/search/', value, { limit: 10, offset: 0 }]);
  }

  ngOnInit(): void {
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
