import { Author } from './book-response.model';

export interface Doc {
  key: string;
  type: string;
  seed: string[];
  title: string;
  title_suggest: string;
  title_sort: string;
  edition_count: number;
  edition_key: string[];
  publish_date: string[];
  publish_year: number[];
  first_publish_year: number;
  number_of_pages_median: number;
  isbn: string[];
  last_modified_i: number;
  ebook_count_i: number;
  ebook_access: string;
  has_fulltext: boolean;
  public_scan_b: boolean;
  publisher: string[];
  language: string[];
  author_key: string[];
  author_name: string[];
  publisher_facet: string[];
  _version_: number;
  author_facet: string[];
}

export interface Work {
  key: string;
  title: string;
  author_name: Author[];
  publish_year: number[];
  publisher: string[];
  number_of_pages_median: number;
  isbn: string[];
  langauge: string[];
  ebook_access: string;
}

export interface SearchResponse {
  start: number;
  num_found: number;
  numFound: number;
  docs: Doc[];
  num_found_exact: boolean;
  q: string;
  offset: number;
}
