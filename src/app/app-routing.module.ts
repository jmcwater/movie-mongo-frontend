import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import {MovieAddComponent} from './movies/movie-add/movie-add.component';
import {MovieDetailComponent} from './movies/movie-detail/movie-detail.component';
import {MovieEditComponent} from './movies/movie-edit/movie-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent, children: [
    { path: '', component: MovieStartComponent },
    { path: 'new', component: MovieAddComponent },
    { path: ':title', component: MovieDetailComponent },
    { path: ':title/edit', component: MovieEditComponent },
  ] },
  // { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
