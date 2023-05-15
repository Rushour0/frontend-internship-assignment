import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'front-end-internship-assignment-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  static bookSearch: FormControl;
  static _child: string;

  @Input() set child(value: string) {
    console.log(value);

    NavbarComponent._child = value;
  }

  get child() {
    return NavbarComponent._child;
  }

  constructor(private router: Router) {
    NavbarComponent.bookSearch = new FormControl('');
  }

  get bookSearch() {
    return NavbarComponent.bookSearch;
  }

  set bookSearch(value) {
    NavbarComponent.bookSearch = value;
  }

  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];

  onSearch() {
    this.router.navigateByUrl('/search/' + NavbarComponent.bookSearch.value);
  }

  ngOnInit(): void {
    NavbarComponent.bookSearch.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value: string) => {});
  }
}
