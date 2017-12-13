import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { MoviesComponent } from './movies/movies.component';
import {MovieService} from './movies/movie.service';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import { MovieAddComponent } from './movies/movie-add/movie-add.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MoviesPlayingComponent } from './movies-playing/movies-playing.component';
import {MoviesPlayingService} from './movies-playing/movies-playing.service';
import { MoviesItemComponent } from './movies-playing/movies-list/movies-item/movies-item.component';
import { MoviesListComponent } from './movies-playing/movies-list/movies-list.component';
import { MoviesAddComponent } from './movies-playing/movies-add/movies-add.component';
import { MoviesDetailComponent } from './movies-playing/movies-detail/movies-detail.component';
import { TheatresComponent } from './theatres/theatres.component';
import { TheatreListComponent } from './theatres/theatre-list/theatre-list.component';
import { TheatreItemComponent } from './theatres/theatre-list/theatre-item/theatre-item.component';
import { TheatreAddComponent } from './theatres/theatre-add/theatre-add.component';
import {TheatreService} from './theatres/theatre.service';
import { TheatreDetailComponent } from './theatres/theatre-detail/theatre-detail.component';
// import { TheatreEditComponent } from './theatres/theatre-edit/theatre-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    MoviesComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieStartComponent,
    MovieAddComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MoviesPlayingComponent,
    MoviesItemComponent,
    MoviesListComponent,
    MoviesAddComponent,
    MoviesDetailComponent,
    TheatresComponent,
    TheatreListComponent,
    TheatreItemComponent,
    TheatreAddComponent,
    TheatreDetailComponent,
    // TheatreEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers:  [MovieService, MoviesPlayingService, TheatreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
