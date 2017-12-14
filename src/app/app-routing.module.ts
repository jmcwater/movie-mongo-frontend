import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import {MovieAddComponent} from './movies/movie-add/movie-add.component';
import {MovieDetailComponent} from './movies/movie-detail/movie-detail.component';
import {MovieEditComponent} from './movies/movie-edit/movie-edit.component';
import {MoviesPlayingComponent} from './movies-playing/movies-playing.component';
import {MoviesAddComponent} from './movies-playing/movies-add/movies-add.component';
import {MoviesDetailComponent} from './movies-playing/movies-detail/movies-detail.component';
import {TheatresComponent} from './theatres/theatres.component';
import {TheatreAddComponent} from './theatres/theatre-add/theatre-add.component';
import {TheatreDetailComponent} from './theatres/theatre-detail/theatre-detail.component';
// import {TheatreEditComponent} from './theatres/theatre-edit/theatre-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent, children: [
    { path: '', component: MovieStartComponent},
    { path: 'new', component: MovieAddComponent},
    { path: ':title', component: MovieDetailComponent},
    { path: ':title/edit', component: MovieEditComponent},
  ] },
  { path: 'movies-playing', component: MoviesPlayingComponent, children: [
    // { path: '', component: MovieStartComponent},
    { path: 'new', component: MoviesAddComponent},
    { path: ':datePlaying', component: MoviesDetailComponent},
  ] },
  { path: 'theatres', component: TheatresComponent, children: [
    // { path: '', component: MovieStartComponent},
    { path: 'new', component: TheatreAddComponent},
    { path: ':theatres', component: TheatreDetailComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
