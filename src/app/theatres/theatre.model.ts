export class Theatre {

  private _theatres: String;
  private _city: String;


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }


 public get theatres(): String {
    return this._theatres;
  }

  public set theatres(value: String) {
    this._theatres = value;
  }

  public get city(): String {
    return this._city;
  }

  public set city(value: String) {
    this._city = value;
  }
}
