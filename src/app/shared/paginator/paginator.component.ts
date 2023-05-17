import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { Doc } from 'src/app/core/models/search-response.model';

@Component({
  selector: 'front-end-internship-assignment-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  constructor(private router: Router) {}

  @Input() query: string = '';
  @Input() limit: number = 10;
  @Input() offset: number = 0;
  @Input() pageIndex: number = 0;
  @Input() filter: string = 'Open Search';

  length = 50;
  @Input() set num_found(value: number) {
    this.length = value;
  }
  pageSize = 10;
  pageSizeOptions = [10, 20, 50, 100];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent = new PageEvent();

  onPreviousPage() {
    console.log(this.pageIndex);
    if (this.pageIndex > 1) {
      this.router.navigate([
        '/search/',
        this.query,

        {
          limit: 10,
          offset: this.pageSize * (this.pageIndex - 2),
          filter: this.filter,
        },
      ]);
    }
  }

  onNextPage() {
    if (this.pageIndex < this.length / this.pageSize) {
      this.router.navigate([
        '/search/',
        this.query,
        {
          limit: 10,
          offset: this.pageSize * this.pageIndex,
          filter: this.filter,
        },
      ]);
    }
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }
}
