import {Movie} from '../movies/movie.model';

export class DatePlaying {

  private _datePlaying: String;
  private _timePlaying: String;
  private _movies: Movie[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get datePlaying(): String {
    return this._datePlaying;
  }

  public set datePlaying(n: String) {
    this._datePlaying = n;
  }


  public get timePlaying(): String {
    return this._timePlaying;
  }

  public set timePlaying(value: String) {
    this._timePlaying = value;
  }


  public get movies(): Movie[] {
    return this._movies;
  }

  public set movies(value: Movie[]) {
    this._movies = value;
  }
}
