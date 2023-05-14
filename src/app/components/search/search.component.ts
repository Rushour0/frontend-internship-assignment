import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
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

  allDocs: Doc[] = [];

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {
    this.bookSearch = new FormControl('');
  }

  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];

  limit: number = 10;
  offset: number = 0;

  getQuery() {
    this.searchService
      .getQuery(this.query, this.limit, this.offset)
      .subscribe((data) => {
        this.allDocs = data?.docs;
        // this.subjectsArray = data;
        this.isLoading = false;
        console.log(this.allDocs);
      });
  }

  ngOnInit(): void {
    this.this.route.paramMap.subscribe((params: ParamMap) => {
      this.query = params.get('query') || '';
      this.isLoading = true;
      this.getQuery();
    });
  }
}
