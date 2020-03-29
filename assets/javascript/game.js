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
  