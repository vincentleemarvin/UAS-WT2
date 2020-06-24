import { Component, OnInit } from "@angular/core";

import { PokemonService } from "./pokemon.service";
import { BehaviorSubject } from "rxjs";

@Component({
    selector: "ns-items",
    templateUrl: "./pokemon.component.html",
})
export class PokemonComponent implements OnInit {
    pokemons = [];

    constructor(private ps: PokemonService) {}

    ngOnInit(): void {
        this.ps.getPokemons().subscribe((response: any) => {
          this.pokemons = response
          console.log(this.pokemons)
        });
    }

}
