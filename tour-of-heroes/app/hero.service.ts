import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {
  constructor(private _http: Http) { }

  getHeroes() {
    return Promise.resolve(HEROES);
  }
}