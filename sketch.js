//https://pokeapi.co/api/v2/pokemon

let pokemon = [];

//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {
  //The URL is formatted according to the documentation provided by the developers in:
  //https://pokeapi.co/api/v2/pokemon

    for (let i=0; i<12;){
      let num = Math.floor(Math.random() * 801) + 1;
      let url = "https://pokeapi.co/api/v2/pokemon/" + num;
      pokemon[i] = loadJSON(url);
      i++;
    }
    noLoop();
    console.log(pokemon);
}

function setup() {
//Return all JSON data
  //Display the pokemon information on the screen
  var canvas = createCanvas(1280, 720);
  canvas.parent("myContainer");

  textAlign(CENTER);
  textSize(18);
  noLoop();
}

function draw(){
console.log(pokemon);

  background(255, 255, 255);
  let pos = 0;
  //make it white as a catch all
  let mapColor = color(255, 255, 255);
  i=0;

// displaying 1st line of pokemon on screen
  for (var i=0; i<6;){
      console.log(i);
      let type = pokemon[i].types[0].type.name;

      if (type.indexOf("normal") >= 0) { mapColor = color(169, 168, 120) }
      if (type.indexOf("fire") >= 0) { mapColor = color(240, 127, 47) }
      if (type.indexOf("water") >= 0) { mapColor = color(104, 144, 240) }
      if (type.indexOf("grass") >= 0) { mapColor = color(120, 200, 79) }
      if (type.indexOf("electric") >= 0) { mapColor = color(248, 208, 48) }
      if (type.indexOf("poison") >= 0) { mapColor = color(160, 64, 161) }
      if (type.indexOf("ice") >= 0) { mapColor = color(152, 216, 216) }
      if (type.indexOf("fighting") >= 0) { mapColor = color(192, 48, 40) }
      if (type.indexOf("ground") >= 0) { mapColor = color(224, 192, 105) }
      if (type.indexOf("flying") >= 0) { mapColor = color(168, 144, 240) }
      if (type.indexOf("rock") >= 0) { mapColor = color(183, 160, 56) }
      if (type.indexOf("dark") >= 0) { mapColor = color(111, 88, 72) }
      if (type.indexOf("psychic") >= 0) { mapColor = color(248, 88, 136) }
      if (type.indexOf("ghost") >= 0) { mapColor = color(112, 87, 152) }
      if (type.indexOf("steel") >= 0) { mapColor = color(184, 184, 208) }
      if (type.indexOf("bug") >= 0) { mapColor = color(168, 184, 33) }
      if (type.indexOf("dragon") >= 0) { mapColor = color(112, 56, 249) }
      if (type.indexOf("fairy") >= 0) { mapColor = color(255, 163, 177) }
      fill(mapColor);
      rect(pos+1, 0, 213, 360);
      fill(0);
      text("Pokemon: " + pokemon[i].name + "\n Id Number: " + pokemon[i].id + "\n Type: " + pokemon[i].types[0].type.name + "\nWeight: " + pokemon[i].weight + "\nHeight: " + pokemon[i].height + "\n Ability: " + pokemon[i].abilities[0].ability.name, pos, width/6-100, height/3.5);
      i++;
      pos = i * 213;
}
    pos = 0;

// displaying 2nd line of pokemon on screen
    for (i=0; i<6;){

        type = pokemon[i+6].types[0].type.name;

        if (type.indexOf("normal") >= 0) { mapColor = color(169, 168, 120) }
        if (type.indexOf("fire") >= 0) { mapColor = color(240, 127, 47) }
        if (type.indexOf("water") >= 0) { mapColor = color(104, 144, 240) }
        if (type.indexOf("grass") >= 0) { mapColor = color(120, 200, 79) }
        if (type.indexOf("electric") >= 0) { mapColor = color(248, 208, 48) }
        if (type.indexOf("poison") >= 0) { mapColor = color(160, 64, 161) }
        if (type.indexOf("ice") >= 0) { mapColor = color(152, 216, 216) }
        if (type.indexOf("fighting") >= 0) { mapColor = color(192, 48, 40) }
        if (type.indexOf("ground") >= 0) { mapColor = color(224, 192, 105) }
        if (type.indexOf("flying") >= 0) { mapColor = color(168, 144, 240) }
        if (type.indexOf("rock") >= 0) { mapColor = color(183, 160, 56) }
        if (type.indexOf("dark") >= 0) { mapColor = color(111, 88, 72) }
        if (type.indexOf("psychic") >= 0) { mapColor = color(248, 88, 136) }
        if (type.indexOf("ghost") >= 0) { mapColor = color(112, 87, 152) }
        if (type.indexOf("steel") >= 0) { mapColor = color(184, 184, 208) }
        if (type.indexOf("bug") >= 0) { mapColor = color(168, 184, 33) }
        if (type.indexOf("dragon") >= 0) { mapColor = color(112, 56, 249) }
        if (type.indexOf("fairy") >= 0) { mapColor = color(255, 163, 177) }

        fill(mapColor);
        rect(pos+1, 360, 213, 360);
        fill(0);
        text("Pokemon: " + pokemon[i+6].name + "\n Id Number: " + pokemon[i+6].id + "\n Type: " + pokemon[i+6].types[0].type.name + "\nWeight: " + pokemon[i+6].weight + "\nHeight: " + pokemon[i+6].height + "\n Ability: " + pokemon[i+6].abilities[0].ability.name, pos, width/2.25-100, height/3.5);
        i++;
        pos = i * 213;
      }
noLoop();
}

function mousePressed() {
pokemon = [];
preload();
redraw();
}
