export class Movie {

  private _title: string;
  private _description: string;
  private _imagePath: string;

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
