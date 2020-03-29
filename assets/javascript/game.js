$(document).ready(function () {
  //Variables
  var heroSelected;
  var myHero;
  var enemySelected;
  var myEnemy;
  var enemyChosen = false;
  var wins = 0;
  var restart = false;
  var resetBtn = true;
  var endGame = false;

  //Character  Objects
  var characters = [
    {
      name: "Saitama",
      healthPoints: 500,
      attackPower: 50,
      counterAttackPower: 20
    },

    {
      name: "Genos",
      healthPoints: 150,
      attackPower: 5,
      counterAttackPower: 20
    },

    {
      name: "Boros",
      healthPoints: 200,
      attackPower: 8,
      counterAttackPower: 20
    },

    {
      name: "Crablante",
      healthPoints: 50,
      attackPower: 2,
      counterAttackPower: 20
    }];

  initiateGame()

  function initiateGame() {

    for (var i = 0; i < characters.length; i++) {
      $("#characterChoices").append("<div class='col-3'> <div class='p-0 bg-dark pt-4 start' data-id='" + i + "'> <img src='assets/images/" + characters[i].name + ".jpg' class=' mx-auto d-block charImages'/> <p class='text-center textChar' >" + characters[i].name + "<br> Health: " + characters[i].healthPoints + "</p> </div></div>");
    }
  };

  $(document).on("click", ".start", function () {
    heroSelected = $(this).attr("data-id");
    myHero = characters[heroSelected];
    console.log($(this).attr("data-id"));
    for (var i = 0; i < characters.length; i++) {
      if (i != heroSelected) {
        $("#enemyAvailable").append("<div class='col-3 pt-4 p-0 d-block mx-auto bg-dark textChar enemies' data-id='" + i + "'> <img src='assets/images/" + characters[i].name + ".jpg' class='pt-3 mx-auto d-block charImages'/> <p class='text-center textChar'>" + characters[i].name + "<br> Health: " + characters[i].healthPoints + "</p> </div>");
      } else {
        $("#myHero").append("<div class='container d-block mx-auto bg-dark textChar hero' data-id='" + i + "'> <img src='assets/images/" + characters[i].name + ".jpg' class='pt-3 mx-auto d-block charImages'/> <p class='text-center textChar' >" + characters[i].name + "<br> Health: " + characters[i].healthPoints + "</p> </div>");
      }
    }
    $("#characterChoices").empty();
  });

  $(document).on("click", ".enemies", function () {
    if (!enemyChosen) {
      enemyChosen = true;
      enemySelected = $(this).attr("data-id");
      myEnemy = characters[enemySelected];
      console.log(myEnemy);

      $("#enemyPicked").append("<div class='container d-block mx-auto bg-dark textChar defender' data-id='" + myEnemy + "'> <img src='assets/images/" + myEnemy.name + ".jpg' class='pt-3 mx-auto d-block charImages'/> <p class='text-center textChar' id='" + i + "'>" + myEnemy.name + "<br> Health: " + myEnemy.healthPoints + "</p> </div>");
      $("#enemyAvailable").empty();

      for (var i = 0; i < characters.length; i++) {
        if (i != enemySelected && i != heroSelected && characters[i].healthPoints > 0) {
          $("#enemyAvailable").append("<div class='col-3 pt-4 p-0 d-block mx-auto bg-dark textChar enemies' data-id='" + i + "'> <img src='assets/images/" + characters[i].name + ".jpg' class=' mx-auto d-block charImages'/> <p class='text-center textChar'>" + characters[i].name + "<br> Health: " + characters[i].healthPoints + "</p> </div>");
        }
      }
    }
  });

  $(".attackButton").click(function () {
    if (enemyChosen === true && endGame === false) {
      //attack the defender and reduce his hp by mychar attack power
      myEnemy.healthPoints = myEnemy.healthPoints - myHero.attackPower;
      myHero.attackPower = myHero.attackPower * 2;
      //then he instantly counteres and reduces my hp with his counter attack power
      myHero.healthPoints = myHero.healthPoints - myEnemy.counterAttackPower;

      $("#hitText").text("You hit " + myEnemy.name + " with " + myHero.attackPower + " attack power");
      $("#damageText").text("You got hit with " + myEnemy.counterAttackPower + " attack power");

      $("#enemyPicked").html("<div class='container d-block mx-auto bg-dark textChar defender' data-id='" + myEnemy + "'> <img src='assets/images/" + myEnemy.name + ".jpg' class='pt-3 mx-auto d-block charImages'/> <p class='text-center textChar' >" + myEnemy.name + "<br> Health: " + myEnemy.healthPoints + "</p> </div>");
      $("#myHero").html("<div class='container d-block mx-auto bg-dark textChar hero' data-id='" + myHero + "'> <img src='assets/images/" + myHero.name + ".jpg' class='pt-3 mx-auto d-block charImages'/> <p class='text-center textChar' >" + myHero.name + "<br> Health: " + myHero.healthPoints + "</p> </div>");

      //if enemy hp is at or below 0 clear the defender area
      if (myEnemy.healthPoints <= 0) {
        $("#enemyPicked").removeClass("defender").empty();
        wins++;
        enemyChosen = false;
        if (wins === 3) {
          $("#winLose").html("<p>YOU WIN!</p>");
          endGame = true
          restart = true;
          resetBtn = false;
          restartFunc();
        }
      }
      //if my hp is at or below 0 i lose
      if (myHero.healthPoints <= 0) {
        $("#myHero").empty();
        $("#winLose").html("<p>GAMEOVER. YOU LOSE</p>");
        endGame = true
        restart = true;
        resetBtn = false;
        restartFunc();
      }
    }
  });
