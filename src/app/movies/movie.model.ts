import { DatePlaying } from '../shared/datePlaying.model';

export class Movie {

  private _title: string;
  private _description: string;
  private _imagePath: string;
  private _genre: string;
  private _datePlaying: DatePlaying[];
  private _age: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get title(): string {
    return this._title;
  }

  public set title(n: string) {
    this._title = n;
  }

  public get description(): string {
    return this._description;
  }

  public set description(d: string) {
    this._description = d;
  }

  public get imagePath(): string {
    return this._imagePath;
  }

  public set imagePath(img: string) {
    this._imagePath = img;
  }

  public get datePlaying(): DatePlaying[] {
    return this._datePlaying;
  }

  public set datePlaying(ing: DatePlaying[]) {
    this._datePlaying = ing;
  }

  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    this._age = value;
  }

  public get genre(): string {
    return this._genre;
  }

  public set genre(value: string) {
    this._genre = value;
  }
}








// export class Recipe {
//   public name: string;
//   public description: string;
//   public imagePath: string;
//   public ingredients: Ingredient[];
//
//   constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
//     this.name = name;
//     this.description = desc;
//     this.imagePath = imagePath;
//     this.ingredients = ingredients;
//   }
// }
