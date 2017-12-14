export class Theatre {

  private _theatres: String;
  private _city: String;
  private _adress: String;
  private _zipcode: String;
  private _phoneNumber: String;


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


  public get adress(): String {
    return this._adress;
  }

  public set adress(value: String) {
    this._adress = value;
  }

  public get zipcode(): String {
    return this._zipcode;
  }

  public set zipcode(value: String) {
    this._zipcode = value;
  }

  public get phoneNumber(): String {
    return this._phoneNumber;
  }

  public set phoneNumber(value: String) {
    this._phoneNumber = value;
  }
}
