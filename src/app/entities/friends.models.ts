import { empty } from 'rxjs';

export interface IFriend {
  _id?: string;
  race: string;
  age: string;
  family: string;
  alimentation: string;
}

export class Friend implements IFriend {
  constructor(
    public race: string,
    public age: string,
    public family: string,
    public alimentation: string,
    public _id?: string
  ) {
    this._id = _id ? _id : "";
    this.race = race;
    this.age = age;
    this.family = family;
    this.alimentation = alimentation;
  }
}