import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view/table-view.component';
import { MatIconModule } from '@angular/material/icon';
import { SearchTableViewComponent } from './search-table-view/search-table-view.component';

@NgModule({
  declarations: [TableViewComponent, SearchTableViewComponent],
  imports: [CommonModule, MatIconModule],
  exports: [TableViewComponent, SearchTableViewComponent, MatIconModule],
})
export class SharedModule {}
