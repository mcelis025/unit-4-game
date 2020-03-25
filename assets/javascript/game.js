//Variables
var saitamaSelect = $('<div class="container p-0 bg-dark pt-4" id="saitama"> <img src="assets/images/saitama.jpg" alt="saitama" class="mx-auto d-block saitamaImg"/> <p class="text-center myText">Saitama</p> <p class="text-center myText">Health: </p> </div>');
var genosSelect = $('<div class="container p-0 bg-dark pt-4" id="genos"> <img src="assets/images/genos.jpg" alt="genos" class="mx-auto d-block genosImg"/> <p class="text-center myText">Genos</p> <p class="text-center myText">Health: </p> </div>');
var borosSelect = $('<div class="container p-0 bg-dark pt-4" id="boros"> <img src="assets/images/boros.jpg" alt="boros" class="mx-auto d-block borosImg"/> <p class="text-center myText">Boros</p> <p class="text-center myText">Health: </p> </div>');
var crablanteSelect = $('<div class="container p-0 bg-dark pt-4" id="crablante"> <img src="assets/images/crablante.jpg" alt="crablante" class="mx-auto d-block crabImg"/> <p class="text-center myText">Crablante</p> <p class="text-center myText">Health: </p> </div>');

var heroSelected;
var enemySelected;

var heroChosen = false;

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
  name: "Boros",
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


/*
//Pick Character
$("#saitamaClick").click(function () {
  if (heroChosen === false) {

    heroSelected = saitamaSelect;

    $("#saitamaClick").remove().addClass("saitama");
    $("#genosClick").remove().addClass("genos");
    $("#borosClick").remove().addClass("boros");
    $("#crablanteClick").remove().addClass("crablante");

    //Hero Selected
    $("#myHero").append(saitamaSelect);
    saitamaSelect.attr('id', 'saitamaClick');

    //Adds enemy1 to enemies available
    $("#enemy1").append(genosSelect);
    genosSelect.attr('id', 'genosClick');
    //Click sends enemy1 to defender slot      
    $("#enemy1").click(function () {
      $("#genosClick").remove();
      $("#enemy1").remove();
      $("#defender").append(genosSelect);
      genosSelect.attr('id', 'genosClick');
    })

    //Adds enemy2 to enemies available
    $("#enemy2").append(borosSelect);
    borosSelect.attr('id', 'borosClick');
    //Click sends enemy2 to defender slot      
    $("#enemy2").click(function () {
      $("#borosClick").remove();
      $("#enemy2").remove();
      $("#defender").append(borosSelect);
      borosSelect.attr('id', 'borosClick');
    })

    //Adds enemy3 to enemies available
    $("#enemy3").append(crablanteSelect);
    crablanteSelect.attr('id', 'crablanteClick');
    //Click sends enemy3 to defender slot      
    $("#enemy3").click(function () {
      $("#crablanteClick").remove();
      $("#enemy3").remove();
      $("#defender").append(crablanteSelect);
      crablanteSelect.attr('id', 'crablanteClick');
    })
  }
});

$("#genosClick").click(function () {
  if (heroChosen === false) {

    $("#saitamaClick").remove().addClass("saitama");
    $("#genosClick").remove().addClass("genos");
    $("#borosClick").remove().addClass("boros");
    $("#crablanteClick").remove().addClass("crablante");

    //Adds enemy1 to enemies available
    $("#enemy1").append(saitamaSelect);
    saitamaSelect.attr('id', 'saitamaClick');
    //Click sends enemy1 to defender slot      
    $("#enemy1").click(function () {
      $("#saitamaClick").remove();
      $("#enemy1").remove();
      $("#defender").append(saitamaSelect);
      saitamaSelect.attr('id', 'saitamaClick');
    })

    //Hero Selected
    $("#myHero").append(genosSelect);
    genosSelect.attr('id', 'genosClick');

    //Adds enemy2 to enemies available
    $("#enemy2").append(borosSelect);
    borosSelect.attr('id', 'borosClick');
    //Click sends enemy2 to defender slot      
    $("#enemy2").click(function () {
      $("#borosClick").remove();
      $("#enemy2").remove();
      $("#defender").append(borosSelect);
      borosSelect.attr('id', 'borosClick');
    })

    //Adds enemy3 to enemies available
    $("#enemy3").append(crablanteSelect);
    crablanteSelect.attr('id', 'crablanteClick');
    //Click sends enemy3 to defender slot      
    $("#enemy3").click(function () {
      $("#crablanteClick").remove();
      $("#enemy3").remove();
      $("#defender").append(crablanteSelect);
      crablanteSelect.attr('id', 'crablanteClick');
    })
  }
});

$("#borosClick").click(function () {
  if (heroChosen === false) {

    $("#saitamaClick").remove().addClass("saitama");
    $("#genosClick").remove().addClass("genos");
    $("#borosClick").remove().addClass("boros");
    $("#crablanteClick").remove().addClass("crablante");

    //Adds enemy1 to enemies available
    $("#enemy1").append(saitamaSelect);
    saitamaSelect.attr('id', 'saitamaClick');
    //Click sends enemy1 to defender slot      
    $("#enemy1").click(function () {
      $("#saitamaClick").remove();
      $("#enemy1").remove();
      $("#defender").append(saitamaSelect);
      saitamaSelect.attr('id', 'saitamaClick');
    })

    //Adds enemy2 to enemies available      
    $("#enemy2").append(genosSelect);
    genosSelect.attr('id', 'genosClick');
    //Click sends enemy1 to defender slot      
    $("#enemy2").click(function () {
      $("#genosClick").remove();
      $("#enemy2").remove();
      $("#defender").append(genosSelect);
      genosSelect.attr('id', 'genosClick');
    })

    //Hero Selected
    $("#myHero").append(borosSelect);
    borosSelect.attr('id', 'borosClick');

    //Adds enemy3 to enemies available
    $("#enemy3").append(crablanteSelect);
    crablanteSelect.attr('id', 'crablanteClick');
    //Click sends enemy3 to defender slot      
    $("#enemy3").click(function () {
      $("#crablanteClick").remove();
      $("#enemy3").remove();
      $("#defender").append(crablanteSelect);
      crablanteSelect.attr('id', 'crablanteClick');
    })
  }
});

$("#crablanteClick").click(function () {
  if (heroChosen === false) {
    $("#saitamaClick").remove().addClass("saitama");
    $("#genosClick").remove().addClass("genos");
    $("#borosClick").remove().addClass("boros");
    $("#crablanteClick").remove().addClass("crablante");

    //Adds enemy1 to enemies available
    $("#enemy1").append(saitamaSelect);
    saitamaSelect.attr('id', 'saitamaClick');
    //Click sends enemy1 to defender slot      
    $("#enemy1").click(function () {
      $("#saitamaClick").remove();
      $("#enemy1").remove();
      $("#defender").append(saitamaSelect);
      saitamaSelect.attr('id', 'saitamaClick');
    })

    //Adds enemy2 to enemies available      
    $("#enemy2").append(genosSelect);
    genosSelect.attr('id', 'genosClick');
    //Click sends enemy1 to defender slot      
    $("#enemy2").click(function () {
      $("#genosClick").remove();
      $("#enemy2").remove();
      $("#defender").append(genosSelect);
      genosSelect.attr('id', 'genosClick');
    })

    //Adds enemy3 to enemies available      
    $("#enemy3").append(borosSelect);
    borosSelect.attr('id', 'borosClick');
    //Click sends enemy3 to defender slot      
    $("#enemy3").click(function () {
      $("#borosClick").remove();
      $("#enemy3").remove();
      $("#defender").append(borosSelect);
      borosSelect.attr('id', 'borosClick');
    })

    $("#myHero").append(crablanteSelect);
    crablanteSelect.attr('id', 'crablanteClick');
  }
});

$("#attackButton").click(function (attackEnemy) {

  enemySelected.healthPoints = enemySelected.healthPoints - heroSelected.attackPower;
  console.log(enemySelected.healthPoints);


  if (heroChosen === true && enemySelected === true) {

  }
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