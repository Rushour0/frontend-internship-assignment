import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { delay } from 'rxjs';
import { Doc } from 'src/app/core/models/search-response.model';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'front-end-internship-assignment-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  bookSearch: FormControl;
  isLoading: boolean = true;

  query: string = '';
  queryPhrase: string = '';

  allDocs: Doc[] = [];

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {
    this.bookSearch = new FormControl('');
  }

  limit: number = 10;
  offset: number = 0;
  num_found: number = 0;
  pageNumber: number = 1;

  getDocsByQuery() {
    this.searchService.getDocsByQuery(this.query).subscribe((data) => {
      this.num_found = data?.num_found || 0;
      this.allDocs = data?.docs;
      this.pageNumber = Math.ceil(this.offset / this.limit + 1);
      console.log(data);
      // this.subjectsArray = data;
      this.isLoading = false;
    });
  }

  getQuery() {
    console.log(this.isLoading);
    this.searchService
      .getQuery(this.query, this.limit, this.offset)
      .pipe(delay(1000))
      .subscribe((data) => {
        this.num_found = data?.num_found || 0;
        this.allDocs = data?.docs;
        this.pageNumber = Math.ceil(this.offset / this.limit + 1);
        // this.subjectsArray = data;
      });
    this.isLoading = false;
    console.log(this.isLoading);
  }

  getByAuthor() {
    this.searchService
      .getByAuthor(this.query, this.limit, this.offset)
      .subscribe((data) => {
        this.num_found = data?.num_found || 0;
        this.pageNumber = Math.ceil(this.offset / this.limit + 1);
        this.allDocs = data?.docs;
        // this.subjectsArray = data;
        console.log(data);
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.query = params.get('query') || '';
      this.queryPhrase = this.query;
      this.limit = Number.parseInt(params.get('limit') || '10');
      this.offset = Number.parseInt(params.get('offset') || '0');

      this.query = `?q=${this.query.trim()}&limit=${this.limit}&offset=${
        this.offset
      }`;

      console.log(this.query);
      this.isLoading = true;

      this.getDocsByQuery();
    });
  }
}
