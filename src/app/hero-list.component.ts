import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  styles: [`
    li {
          cursor: pointer;
    }

    button {
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .new-hero-background {
        background-color: antiquewhite;
    }

    #add-new-hero-snippet {
        margin-left: 10px;
        margin-bottom: 10px;
    }

  `],
  providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addNewHeroSnippet = false;

  readonly originalNewHero = {
    name: '',
    power: 'Invisibility on demand',
  };

  newHero = {
    name: '',
    power: 'Invisibility on demand',
  };

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }

  openAddNewHeroSnippet() {
      this.addNewHeroSnippet = true;
  }

  addNewHero() {
      this.service.addNewHero(this.newHero.name, this.newHero.power);

      this.heroes = this.service.getHeroes();
  }

  cancelNewHero() {
    this.newHero = this.originalNewHero;
    this.addNewHeroSnippet = false;
  }
}
