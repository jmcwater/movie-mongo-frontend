import { DatePlaying } from '../shared/datePlaying.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class MoviesPlayingService {
  // ingredientsChanged = new Subject<Ingredient[]>();
  // startedEditing = new Subject<number>();

  private moviesPlayingSource = new BehaviorSubject<any>({});
  currentMoviePlaying = this.moviesPlayingSource.asObservable();

  private headers = new Headers({ 'Content-type': 'application/json' });
  private serverUrl = environment.serverUrl + '/movies-playing';

  constructor(private http: Http) { }

  changeMoviePlaying(moviePlaying: DatePlaying) {
    this.moviesPlayingSource.next(moviePlaying);
  }

  // alle dates ophalen
  public getDatesPlaying(): Promise<DatePlaying[]> {
    console.log('Dates ophalen van server');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as DatePlaying[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  // één recept ophalen
  public getDatePlaying(datePlaying: String): Promise<DatePlaying> {
    console.log('Specifiek ingredient ophalen van server');
    let url = this.serverUrl + '/' + datePlaying.toLowerCase();

    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as DatePlaying;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  // één date toevoegen
  public addDatePlaying(datePlaying: DatePlaying): Promise<DatePlaying> {
    console.log('Date toevoegen aan database');

    return this.http.post(this.serverUrl + '/new', datePlaying, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as DatePlaying;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  // één date verwijderen
  public deleteDatePlaying(datePlaying: String): Promise<DatePlaying> {
    console.log('Date verwijderen');
    console.log(this.serverUrl);

    return this.http.delete(this.serverUrl + '/' + datePlaying, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as DatePlaying;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }


  private handleError(error: any): Promise<any> {
    console.log('verwerk error');
    return Promise.reject(error.message || error);
  }
}
