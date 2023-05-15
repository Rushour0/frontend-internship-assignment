import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view/table-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchTableViewComponent } from './search-table-view/search-table-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    TableViewComponent,
    SearchTableViewComponent,
    NavbarComponent,
    LoaderComponent,
    PaginatorComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    TableViewComponent,
    SearchTableViewComponent,
    NavbarComponent,
    MatPaginatorModule,
    MatIconModule,
    LoaderComponent,
    MatProgressSpinnerModule,
    PaginatorComponent,
  ],
})
export class SharedModule {}
