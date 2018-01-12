//https://pokeapi.co/api/v2/pokemon

let pokemon;

//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {
  //The URL is formatted according to the documentation provided by the developers in:
  //https://pokeapi.co/api/v2/pokemon
let num = Math.floor(Math.random() * 150) + 1

  let url = "https://pokeapi.co/api/v2/pokemon/" + num;
  pokemon = loadJSON(url);
}

function setup() {
  console.log(pokemon); //Return all JSON data
  //Display the pokemon information on the screen
  createCanvas(1280, 720);
  background(160);
  textAlign(CENTER);
  textSize(18);
  text("Pokemon: " + pokemon.name + "\n Id Number: " + pokemon.id + "\n Type: " + pokemon.types[0].type.name + "\nWeight: " + pokemon.weight + "\nHeight: " + pokemon.height + "\n Abilities: " + pokemon.abilities[0].ability.name + " and " +pokemon.abilities[1].ability.name, width/2, height/2);
  noLoop();
}

function draw(){
}
