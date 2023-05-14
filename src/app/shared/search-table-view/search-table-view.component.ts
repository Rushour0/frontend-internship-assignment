import { Component, Input } from '@angular/core';

import { Doc } from 'src/app/core/models/search-response.model';

@Component({
  selector: 'front-end-internship-assignment-search-table-view',
  templateUrl: './search-table-view.component.html',
  styleUrls: ['./search-table-view.component.scss'],
})
export class SearchTableViewComponent {
  @Input() allDocs: Doc[] = [];
  @Input() query: string = '';
}
