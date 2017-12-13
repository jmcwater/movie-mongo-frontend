import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

import { Movie } from './movie.model';
import { MoviesPlayingService } from '../movies-playing/movies-playing.service';

@Injectable()
export class MovieService {
  moviesChanged = new Subject<Movie[]>();

  private movieSource = new BehaviorSubject<any>({});
  currentMovie = this.movieSource.asObservable();

  private headers = new Headers({ 'Content-type': 'application/json' });
  private serverUrl = environment.serverUrl + '/movies';


  constructor(private http: Http,
              private moviesPlayingService: MoviesPlayingService) { }

  changeMovie(movie: Movie) {
    this.movieSource.next(movie);
  }

// alle recepten ophalen
  public getMovies(): Promise<Movie[]> {
    console.log('movies ophalen van server');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Movie[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

// één recept ophalen
  public getMovie(title: String): Promise<Movie> {
    console.log('Specifiek recept ophalen van server');
    let url = this.serverUrl + '/' + title.toLowerCase();

    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Movie;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

// één movie toevoegen
  public addMovie(movie: Movie): Promise<Movie> {
    console.log('Movie toevoegen');

    return this.http.post(this.serverUrl + '/new', movie, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Movie;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

// een movie wijzigen
  public updateMovie(movie: Movie): Promise<Movie> {
    console.log('movie wijzigen');

    return this.http.put(this.serverUrl + '/' + movie.title + '/edit', movie, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Movie;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

// één movie verwijderen
  public deleteMovie(title: String): Promise<Movie> {
    console.log('Movie verwijderen');

    return this.http.delete(this.serverUrl + '/' + title, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Movie;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

// // ingredienten uit recept naar boodschappenlijst plaatsen
//   public addMoviesToMoviesPlaying(moviesPlaying: DatePlaying[]) {
//     for (let datePlaying of moviesPlaying) {
//       this.moviesPlayingService.addDatePlaying(datePlaying);
//     }
//   }

  private handleError(error: any): Promise<any> {
    console.log('verwerk error');
    return Promise.reject(error.message || error);
  }

}
