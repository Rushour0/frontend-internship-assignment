import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view/table-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchTableViewComponent } from './search-table-view/search-table-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeroHomeComponent } from './home-hero/hero-home.component';

@NgModule({
  declarations: [
    TableViewComponent,
    SearchTableViewComponent,
    NavbarComponent,
    LoaderComponent,
    PaginatorComponent,
    SidebarComponent,
    SearchBarComponent,
    HeroHomeComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,

    BrowserModule,
    BrowserAnimationsModule,
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
    HeroHomeComponent,
    SearchBarComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
