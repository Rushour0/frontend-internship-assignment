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
  filter: string = 'Open Search';
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

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.query = params.get('query') || '';
      this.queryPhrase = this.query;

      this.limit = Number.parseInt(params.get('limit') || '10');
      this.offset = Number.parseInt(params.get('offset') || '0');
      this.filter = params.get('filter') || 'Open Search';

      if (this.filter === 'Open Search') {
        this.query = `?q=${this.query.trim()}&limit=${this.limit}&offset=${
          this.offset
        }`;
      }
      if (this.filter === 'Author') {
        this.query = `?author=${this.query.trim()}&limit=${this.limit}&offset=${
          this.offset
        }`;
      }
      if (this.filter === 'Title') {
        this.query = `?title=${this.query.trim()}&limit=${this.limit}&offset=${
          this.offset
        }`;
      }

      this.isLoading = true;

      this.getDocsByQuery();
    });
  }
}
