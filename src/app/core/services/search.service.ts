import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { SearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private apiService: ApiService) {}

  getQuery(
    query: string,
    limit: number = 10,
    offset: number = 0
  ): Observable<SearchResponse> {
    if (!offset) offset = 0;
    return this.apiService.get(
      `/search.json?q=${query}&limit=${limit}&offset=${offset}`
    );
  }

  getByAuthor(
    authorName: string,
    limit: number,
    offset: number = 0
  ): Observable<SearchResponse> {
    if (!offset) offset = 0;
    return this.apiService.get(
      `/search.json?author=${authorName}&limit=${limit}&offset=${offset}`
    );
  }

  getByTitle(
    title: string,
    limit: number,
    offset: number = 0
  ): Observable<SearchResponse> {
    if (!offset) offset = 0;
    return this.apiService.get(
      `/search.json?title=${title}limit=${limit}&offset=${offset}`
    );
  }
}
