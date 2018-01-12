let i;
let x;
let y;
let pos;
let type;
let heights;
let circleheight = 0;

function setup() {
  //set up the screen size and background colour etc
  //Display the pokemon information on the screen
  var canvas = createCanvas(1280, 720);
  canvas.parent("myContainer");
  background(0, 0, 0);
  textAlign(CENTER);
  textSize(16);
  noLoop();
}

function preloadagain (){
  x = 1;
  pos = 0;
  y = 0;
let mapColor = color(255, 255, 255);
  for (i=0; i<12;){
    let num = Math.floor(Math.random() * 801) + 1;
    let url = "https://pokeapi.co/api/v2/pokemon/"+num;
    loadJSON(url, addToPokemonList);
//when i == 5 change the position to start to draw the next row
    i++;
  }
  noLoop();
}

function addToPokemonList(pokemon)
{
  drawit(pokemon);
}

function drawit(pokemonItem){
  //draw your pokemon here
  //console.log("Height: " + pokemonItem.height);
  //console.log("Type: " + pokemonItem.types[0].type.name);
  //console.log(x);

  // displaying 1st line of 6 pokemon on screen
  if (x<7){
    //store the height of the pokemon
    heights = pokemonItem.height;
    // store the type name of the pokemon
    type = pokemonItem.types[0].type.name;
    //console.log(heights, type);
    // change the colour of the "circle" the pokemon data is presented in based on the pokemon type
    colourType();
    fill(mapColor);

    // check height of the circle and change depending on pokemon height
    pokemonHeight();
    //console.log(circleheight);
    // draw cirlce for pokemon
    ellipse(pos+107, 180, 213, circleheight);
    fill(0);
    //console.log(pokemonItem.name);
    // display pokemon details in circle
    text("Pokemon: " + pokemonItem.name + "\n Id Number: " + pokemonItem.id + "\n Type: " + pokemonItem.types[0].type.name + "\nWeight: " + pokemonItem.weight + "\nHeight: " + pokemonItem.height + "\n Ability: " + pokemonItem.abilities[0].ability.name, pos, width/9.4, height/3.3);
    // add one to counter and move the starting position of the next circle along by 213
    pos = x * 213;
  }

// displaying 2nd line of pokemon on screen - all the same as the first line but for the next 6 in the array
    if (x>5){
      type = pokemonItem.types[0].type.name;
      heights = pokemonItem.height;
      colourType();
      fill(mapColor);

      // check height of pokemon
      pokemonHeight();
      ellipse(pos+107, 540, 213, circleheight);
      fill(0);
      text("Pokemon: " + pokemonItem.name + "\n Id Number: " + pokemonItem.id + "\n Type: " + pokemonItem.types[0].type.name + "\nWeight: " + pokemonItem.weight + "\nHeight: " + pokemonItem.height + "\n Ability: " + pokemonItem.abilities[0].ability.name, pos, width/2.6, height/3.3);
      pos = y * 213;
      y++;
    }
  x++;
}

function colourType(){
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
}

function pokemonHeight(){
  if (heights <=4) {circleheight = 200}
  if (heights >4) {circleheight = 240}
  if (heights >7) {circleheight = 270}
  if (heights >10) {circleheight = 300}
  if (heights >13) {circleheight = 330}
  if (heights >15) {circleheight = 360}
}

function keyPressed() {
  if (keyCode === ENTER) {
    // do preload and draw to refresh data when mouse is clicked
    clear();
    background(0, 0, 0);
    textAlign(CENTER);
    textSize(16);
    preloadagain();
  }
}
