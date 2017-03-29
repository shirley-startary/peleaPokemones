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
console.log(pokemons);
function crearPokemons(){
  var nombrePokemon = document.getElementById("nombrePokemon");
  var colorPokemon = document.getElementById("colorPokemon");
  var puntosAtaque = document.getElementById("puntosAtaque");
console.log(nombrePokemon);
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

  var lista1 = document.getElementById("lista1");
  var elemento1 =document.createElement("option");
  var lista2 = document.getElementById("lista2");
  var elemento2 =document.createElement("option");

// console.log(elemento);
// elemento.value="hola"+x;
// x++;
// console.log(elemento);
  pokemons.forEach(function(pokemon){

    elemento1.innerText = pokemon.nombre;
    elemento2.innerText = pokemon.nombre;

    lista1.appendChild(elemento1);
    lista2.appendChild(elemento2);
  });
  //listapokemons.appendChild(lista1);
}

var pokemonAtacante={};
var pokemonReceptor={};

function pelearPokemones(){
  //var pokemon1=document.getElementsByTagName("select")[0].value;
  var pokemon1=lista1.value;
  var pokemon2=lista2.value;


  pokemonAtacante=pokemons.filter(function(pokemon){
    console.log(pokemon.nombre);
    return pokemon.nombre===pokemon1
      //pokemonAtacante=pokemons[0];
  });

    // console.log(pokemon.nombre);
    // if(pokemon.nombre===pokemon2){
    //   pokemonReceptor=pokemons[nombre];
    //   console.log(pokemonReceptor);
    //}
  pokemonReceptor=pokemons.filter(function(pokemon){
  return pokemon.nombre===pokemon2;
  });

  console.log(pokemonReceptor);
  console.log(pokemonAtacante);
  if(pokemon1===pokemon2){
    alert("Seleccione pokemones diferentes");
  }else{
    pokemonAtacante[0].pelear(pokemonReceptor[0]);
    var mostrar=pokemonAtacante[0].nombre+" ataco a "+pokemonReceptor[0].nombre+" y "+pokemonReceptor[0].nombre+" tiene una vida de: "+pokemonReceptor[0].vida;
    document.getElementById("mostrarResultado").innerText = mostrar;
  }
}
