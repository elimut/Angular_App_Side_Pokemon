import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs';
// import { Component, OnInit } from '@angular/core';
// import interface OnInit
// import { POKEMONS } from './mock-pokemon-list'
// import { Pokemon } from './pokemon';

@Component({
  // décorateur
  selector: 'app-root',
  // template: `<h1>Bienvenue sur {{title}}!</h1>`
  // template: `<h1>Bienvenue sur {{ pokemonList[1] }}!</h1>`
  // template: `<h1>Liste de Pokémons</h1>
  // <p>Ceci est un paragraphe</p>
  // <p>Ceci est un paragraphe</p>
  // <p>Ceci est un paragraphe</p>
  // `
  templateUrl: 'app.component.html'
  // pour écrire le template dans un fichier à part. html et ts dans même fichier pas besoin de chemin relatif
})
// la vue est définie dans le template du composant, la logique de la vue sera pilotée par la classe du composant qui est défini plus bas. Si maj dans la ppt, le template se met à jour.
export class AppComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  // déla en-tête http dans les propriétés du composant.
  // on utilise httpHeaders interne à angular
  // on enchapine pas les requetes par ordre chronologique comme avec les promesses

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http
    // méthode get du client http, renvoie un flux d'où abonnement avec subscribr
      .get("http://localhost:3000/")
      .subscribe((res: any) => console.log(res));
    // get JWT token
  this.http
    .post(
      "http://localhost:3000/api/login",
      { username: "", password:"" },
    this.httpOptions
    )
    .pipe(
      tap((res: any) => console.log(res)),
      switchMap((res: any) => this.fetchPokemonlist(res.token))
    )
    // switchMap prg réactive défini un ordre d'exécution entre deux flux
    .subscribe((res: any) => console.log(res));
  }
  
  fetchPokemonlist(token: string) {
    // prog réactive et objet httpHeaders
    const httpOptionsWithJWT = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };

    return this.http.get(
      "http://localhost:3000/api/pokemons",
      httpOptionsWithJWT
    );
  }
}
// export class AppComponent implements OnInit {
  // implements interface OnInit
  // title = 'Application de pokémons';
  // décla ppt title. Va venir remplacer la valeur dans le template: `<h1>Welcome to {{title}}!</h1>` 
  // pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];
  // propriété pokemons qui contient un tab de pokemons => envoie erreur car template lié à la ppt title ne peut pas fonctionner. Il faut pousser la ppt pokemons dans le template
  // pokemonList: Pokemon[] = POKEMONS; 
  //  Ajout d'un type pour éviter de modifier la prop. Indique c'est un tab de pokemon
  // pokemonSelected: Pokemon | undefined;
  // prop de type Pokemon, choisie par user
  
  // ngOnInit(): void {
  //   // console.table(pokemonList);
  //   // erreur car la pokemonList n'existe pas = scope, la var est définie au dessus, il faut utiliser le this.
  //   console.table(this.pokemonList);
  //   // afficher un tableau
  //   // this.selectPokemon(this.pokemonList[0]);
  //   // appel de la méthode.
  // }
  // définition de la méthode associée à l'interface OnInit. Typage TS: la méthode ne renvoie rien = void

  // selectPokemon(pokemonName: string) {
  //   console.log(`Vous avez cliqué sur le pokémon ${pokemonName}`);
  //   // décla méthode si user clique sur tel élément du tempalte on va venir lier cette méthode qui sera exécutée
  // }
  // selectPokemon(pokemon: Pokemon) {
  //   console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  //   // décla méthode si user clique sur tel élément du tempalte on va venir lier cette méthode qui sera exécutée
  // }
  // selectPokemon(event: MouseEvent) {
  //   // const index: number = (event.target as HTMLInputElement).value; renvoie un string avec value sauf que type number
  //   // côté template event à un type eventTarget mais que je dois le caster côté class du composant en un autre objet
  //   // const index: number = Number()(event.target as HTMLInputElement).value; conversion en nbr
  //   const index: number = +(event.target as HTMLInputElement).value;
  //   // +conversion en nbr du code à droite de l'opérateur
  //   // si rien de saisi, en js valeur null comme on caste on transforme null en 0
  //   console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`);
  //   // décla méthode si user clique sur tel élément du tempalte on va venir lier cette méthode qui sera exécutée
  // }
  // selectPokemon(pokemonId: string) {
  //   // const id = +pokemonId;
  //   // const index =id +1;
  //   // réup l'identifiant et pas index
  //   const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
  //   // pokemon.id nombre et pokemonId string. Possède deux types car find() peu renvoyer deux types 
  //   if(pokemon){
  //     console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
  //     this.pokemonSelected = pokemon;
  //   } else{
  //     console.log(`Vous avez demandé un pokémon inexistant`);
  //     this.pokemonSelected = pokemon;
  //     // voir ppt pokemonSelected et double typage
  //   }
  // }
// }
