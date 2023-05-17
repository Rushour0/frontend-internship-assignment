import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'front-end-internship-assignment-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  static bookSearch: FormControl;
  static _child: string;

  @Input() set child(value: string) {
    console.log(value);

    SidebarComponent._child = value;
  }

  get child() {
    return SidebarComponent._child;
  }

  constructor(private router: Router) {
    SidebarComponent.bookSearch = new FormControl('');
  }

  get bookSearch() {
    return SidebarComponent.bookSearch;
  }

  set bookSearch(value) {
    SidebarComponent.bookSearch = value;
  }

  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];

  searchTypes: Array<any> = [
    { name: 'Title' },
    { name: 'Author' },
    { name: 'ISBN' },
    { name: 'Publisher' },
  ];

  onSearch() {
    this.router.navigateByUrl('/search/' + SidebarComponent.bookSearch.value);
  }

  ngOnInit(): void {
    SidebarComponent.bookSearch.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value: string) => {});
  }
}
