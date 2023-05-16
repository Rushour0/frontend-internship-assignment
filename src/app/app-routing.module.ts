import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { TrendingSubjectsComponent } from '../app/components/trending-subjects/trending-subjects.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Open Books Library',
  },
  {
    path: 'trending-subject/:name',
    component: TrendingSubjectsComponent,
    title: 'Trending Subjects',
  },
  {
    path: 'search/:query',
    component: SearchComponent,
    title: 'Search Results',
    data: { limit: 10, offset: 0 },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
