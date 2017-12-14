import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Theatre} from './theatre.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {environment} from '../../environments/environment';
import {Http, Headers} from '@angular/http';

@Injectable()
export class TheatreService {
  theatreChanged = new Subject<Theatre[]>();

  private theatreSource = new BehaviorSubject<any>({});
  currentTheatre = this.theatreSource.asObservable();

  private headers = new Headers({ 'Content-type': 'application/json' });
  private serverUrl = environment.serverUrl + '/theatres';


  constructor(private http: Http) { }

  changeTheatre(theatre: Theatre) {
    this.theatreSource.next(theatre);
  }

// alle theaters ophalen
  public getTheatres(): Promise<Theatre[]> {
    console.log('theaters ophalen van server');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Theatre[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

// één theater ophalen
  public getTheatre(theatres: String): Promise<Theatre> {
    console.log('Specifiek theater ophalen van server');
    let url = this.serverUrl + '/' + theatres.toLowerCase();

    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Theatre;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

// één theatre toevoegen
  public addTheatre(theatre: Theatre): Promise<Theatre> {
    console.log('Theatre toevoegen');

    return this.http.post(this.serverUrl + '/new', theatre, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Theatre;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

// een theatre wijzigen
  public updateTheatre(theatre: Theatre): Promise<Theatre> {
    console.log('Theatre wijzigen');

    return this.http.put(this.serverUrl + '/' + theatre.theatres + '/edit', theatre, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Theatre;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

// één movie verwijderen
  public deleteTheatre(theatres: String): Promise<Theatre> {
    console.log('Theatre verwijderen');

    return this.http.delete(this.serverUrl + '/' + theatres, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Theatre;
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
