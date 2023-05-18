import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'front-end-internship-assignment-hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.scss'],
})
export class HeroHomeComponent {
  constructor(private router: Router) {}
  onSearch(value: string) {
    this.router.navigate([
      '/search/',
      value,
      { limit: 10, offset: 0, filter: 'Open Search' },
    ]);
  }
}
