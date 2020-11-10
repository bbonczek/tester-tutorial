import { Injectable, Type } from '@angular/core';

import { Logger } from './logger.service';
import { Hero } from './hero';

const HEROES = [
        new Hero('Windstorm', 'Weather mastery'),
        new Hero('Dr Nice', 'Killing them with kindness'),
        new Hero('Magneta', 'Manipulates metallic objects')
      ];

@Injectable()
export class BackendService {
  constructor(private logger: Logger) {}

  getAll(): Hero[] {
    return HEROES;
  }

  addNew(name, power) {
      HEROES.push(new Hero(name, power));
  }
}
