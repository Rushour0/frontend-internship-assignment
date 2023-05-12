import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { BookResponse } from 'src/app/core/models/book-response.model';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  constructor(private apiService: ApiService) {}

  getByAuthor(
    authorName: string,
    limit: number,
    offset: number = 0
  ): Observable<BookResponse> {
    if (!offset) offset = 0;
    return this.apiService.get(
      `/search.json?author=${authorName}&limit=${limit}&offset=${offset}`
    );
  }

  getByTitle(
    title: string,
    limit: number,
    offset: number = 0
  ): Observable<BookResponse> {
    if (!offset) offset = 0;
    return this.apiService.get(
      `/search.json?title=${title}limit=${limit}&offset=${offset}`
    );
  }
}
