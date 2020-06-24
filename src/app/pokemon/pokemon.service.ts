import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: "root",
})
export class PokemonService {
    baseUrl = `https://digimon-cyber-sleuth-api.herokuapp.com/api/`;

    constructor(private http: HttpClient) { }

    getPokemons() {
        return this.http.get(`${this.baseUrl}digimon`);
    }

    getPokemon(name: string) {
        return this.http.get(`${this.baseUrl}digimon/name/${name}`);
    }
}
