import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { BackendService } from './backend.service';
import { Logger } from './logger.service';

@Injectable()
export class HeroService {
  private heroes: Hero[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  getHeroes() {
    this.heroes = this.backend.getAll() // fill cache
    return this.heroes;
  }

  addNewHero(name, power) {
    this.backend.addNew(name, power);
  }
}
