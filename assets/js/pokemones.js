function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;

  this.saludar = function(){
    console.log("Hola, me llamo " + this.nombre)
  };

  this.pelear = function(pokemonObjeto){
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
  }

  this.beber = function(tipoAlcohol){
    if(tipoAlcohol == "chelas"){
      this.nivelDeAmistad += 80
    }
    else if (tipoAlcohol == "vodka") {
      this.nivelDeAmistad += 10
    }
  };
}


// var pikachu = new Pokemon("Pikachu","amarillo",80);
// var charmander  = new Pokemon("Charmander","rojo",30);
//
// console.log(pikachu)
// console.log(charmander)
//
// pikachu.pelear(charmander)
//
// console.log(charmander.vida)

var pokemons = [];
function crearPokemons(){
  var nombrePokemon = document.getElementById("nombrePokemon");
  var colorPokemon = document.getElementById("colorPokemon");
  var puntosAtaque = document.getElementById("puntosAtaque");

console.log(puntosAtaque);
  var pokemon = new Pokemon(nombrePokemon.value,colorPokemon.value,parseInt(puntosAtaque.value));

  pokemons.push(pokemon);
  nombrePokemon.value="";
  colorPokemon.value="";
  puntosAtaque.value="";
  mostrarPokemons();
}

function mostrarPokemons(){
  var listapokemons = document.getElementById("listaPokemons");

  var lista = document.getElementById("lista1");
  var elemento =document.createElement("option");
  //var lista2 = document.getElementById("lista2");
  //var elemento =document.createElement("option");


  pokemons.forEach(function(pokemon){

    elemento.innerText = pokemon.nombre +" "+pokemon.color +" "+ pokemon.puntosAtaque;
    lista.appendChild(elemento);
  });
  listapokemons.appendChild(lista)
}
