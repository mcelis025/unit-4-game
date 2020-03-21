//Variables
var mainCharacter;
var enemyOne;
var enemyTwo;
var enemyThree;
var enemySelected;

//Character  Objects
var saitama = {
  name: "Saitama",
  healthPoints: 500,
  attackPower: 50,
  counterAttackPower: 20
}

var genos = {
  name: "Genos",
  healthPoints: 150,
  attackPower: 5,
  counterAttackPower: 20
}

var boros = {
  name: "Lord Boros",
  healthPoints: 200,
  attackPower: 8,
  counterAttackPower: 20
}

var crablante = {
  name: "Crablante",
  healthPoints: 50,
  attackPower: 2,
  counterAttackPower: 20
}

//Pick Character
$("#saitamaClick").click(function() {
  mainCharacter = $('<div class="container p-0 bg-secondary pt-4" id="saitamaClick"> <img src="assets/images/saitama.jpg" alt="saitama" class="mx-auto d-block saitamaImg"/> <p class="text-center myText">Saitama</p> <p class="text-center myText">Health: </p> </div>');
  $("#saitamaClick").remove().addClass("saitama");
  $("#genosClick").remove();
  $("#borosClick").remove();
  $("#crablanteClick").remove();

  $("#myHero").append(mainCharacter);
    mainCharacter.attr('id', 'saitamaClick');
  $("#enemy1").append(mainCharacter);
    mainCharacter.attr('id', 'genosClick');
  $("#enemy2").append(mainCharacter);
    mainCharacter.attr('id', 'borosClick');
  $("#enemy3").append(mainCharacter);
    mainCharacter.attr('id', 'crablanteClick');
});

$("#genosClick").click(function() {

});

$("#borosClick").click(function() {

});

$("#crablanteClick").click(function() {

});

  //When character chosen move to your character
  //Move enemy characters to enemies available to attack

//Pick Enemy from enemies available to attack

  //Move chosen character to Defender slot

//When Attack Btn is clicked
  
  //Show how much damage done to enemy
  //Show how much damage taken
  //Update health for both characters

  //if health = 0 
    //I lose
  //if enemy health = 0
    //enemy dies
    //if enemy dies then choose new enemy
    //if enemies = 0 
      //then game is won 
      //restart game btn