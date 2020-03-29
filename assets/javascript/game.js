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
