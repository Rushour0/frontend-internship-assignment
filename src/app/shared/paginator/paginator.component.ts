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

  length = 50;
  @Input() set num_found(value: number) {
    this.length = value;
  }
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [10, 20, 50, 100];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent = new PageEvent();

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.router.navigateByUrl('/search/' + this.query + '/' + this.pageIndex);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }
}
