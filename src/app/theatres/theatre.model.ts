export class Theatre {

  private _theatre: String;
  private _city: String;


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }


 public get theatre(): String {
    return this._theatre;
  }

  public set theatre(value: String) {
    this._theatre = value;
  }

  public get city(): String {
    return this._city;
  }

  public set city(value: String) {
    this._city = value;
  }
}
