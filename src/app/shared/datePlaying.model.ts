export class DatePlaying {

  private _datePlaying: String;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get datePlaying(): String {
    return this._datePlaying;
  }

  public set datePlaying(n: String) {
    this._datePlaying = n;
  }
}
