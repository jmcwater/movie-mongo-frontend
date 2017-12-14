import {Movie} from '../movies/movie.model';

export class DatePlaying {

  private _datePlaying: String;
  private _timePlaying: String;
  private _movie: Movie[];

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


  public get movie(): Movie[] {
    return this._movie;
  }

  public set movie(value: Movie[]) {
    this._movie = value;
  }
}
