const audio = new Audio("assets/songs/laser_cut.mp3");
const click_sound = new Audio("assets/songs/click.mp3");
const tetris = new Audio("assets/songs/tetris.mp3");
const mario = new Audio("assets/songs/mario_retro_theme.mp3");
const kirby = new Audio("assets/songs/kirby.mp3");
const pokemon = new Audio("assets/songs/pokemon_soundtrack.mp3");
const spaceInvader = new Audio("assets/songs/space_invaders.mp3");
const nyanCat = new Audio("assets/songs/nyan-cat-song.mp3");
const levelup = new Audio("assets/songs/level_up.mp3");
const nulll = new Audio("assets/songs/nulll.mp3");
audio.volume = 0.5;
tetris.volume = 0.1;
click_sound.volume = 0.1;
mario.volume = 0.1;
kirby.volume = 0.1;
pokemon.volume = 0.1;
spaceInvader.volume = 0.1;
levelup.volume = 0.1;
nulll.volume = 0.5;
var vitesse = 300;
var SrcCharacter = "assets/images/tetris.png";
var click_coulissement = 1;
var w = 1;
var vol = 0;
var x = 1;
var z = 1;
var nyan = 0;
var HighScore = [];
var C = {
  min: { val: 0, DOM: document.getElementById("min") },
  sec: { val: 60, DOM: document.getElementById("sec") },
};

if (HighScore == undefined) {
  console.log("il n'y a pas encore de highscore dans le local storage");
} else {
  HighScore = getDataLocalStorage("highScores");
  function getDataLocalStorage(key) {
    var DataJSON = localStorage.getItem(key);
    if (DataJSON != null) {
      return JSON.parse(DataJSON);
    }
  }
}



function print() {
  if (HighScore[0] == null) {
    console.log("highscore 1 n'existe pas encore");
  } else {
    document.getElementById("namehighScore").innerText +=
      "Name :" + " " + HighScore[0].nameofplayer;
    document.getElementById("lvlhighScore").innerText +=
      "Points :" + " " + HighScore[0].pointsofplayer;
    document.getElementById("scorehighScore").innerText +=
      "Lvl :" + " " + HighScore[0].lvlofplayer;
    document.getElementById("separation").innerText += "____________";
    document.getElementById("1").title = HighScore[0].date;
  }
  if (HighScore[1] == null) {
    console.log("highscore 2 n'existe pas encore");
  } else {
    document.getElementById("namehighScore2").innerText +=
      "Name :" + " " + HighScore[1].nameofplayer;
    document.getElementById("lvlhighScore2").innerText +=
      "Points :" + " " + HighScore[1].pointsofplayer;
    document.getElementById("scorehighScore2").innerText +=
      "Lvl :" + " " + HighScore[1].lvlofplayer;
    document.getElementById("separation2").innerText += "____________";
    document.getElementById("2").title = HighScore[1].date;
  }

  if (HighScore[2] == null) {
    console.log("highscore 3 n'existe pas encore");
  } else {
    document.getElementById("namehighScore3").innerText +=
      "Name :" + " " + HighScore[2].nameofplayer;
    document.getElementById("lvlhighScore3").innerText +=
      "Points :" + " " + HighScore[2].pointsofplayer;
    document.getElementById("scorehighScore3").innerText +=
      "Lvl :" + " " + HighScore[2].lvlofplayer;
    document.getElementById("separation3").innerText += "____________";
    document.getElementById("3").title = HighScore[2].date;
  }

  if (HighScore[3] == null) {
    console.log("highscore 4 n'existe pas encore");
  } else {
    document.getElementById("namehighScore4").innerText +=
      "Name :" + " " + HighScore[3].nameofplayer;
    document.getElementById("lvlhighScore4").innerText +=
      "Points :" + " " + HighScore[3].pointsofplayer;
    document.getElementById("scorehighScore4").innerText +=
      "Lvl :" + " " + HighScore[3].lvlofplayer;
    document.getElementById("separation4").innerText += "____________";
    document.getElementById("4").title = HighScore[3].date;
  }

  if (HighScore[4] == null) {
    console.log("highscore 5 n'existe pas encore");
  } else {
    document.getElementById("namehighScore5").innerText +=
      "Name :" + " " + HighScore[4].nameofplayer;
    document.getElementById("lvlhighScore5").innerText +=
      "Points :" + " " + HighScore[4].pointsofplayer;
    document.getElementById("scorehighScore5").innerText +=
      "Lvl :" + " " + HighScore[4].lvlofplayer;
    document.getElementById("separation5").innerText += "____________";
    document.getElementById("5").title = HighScore[4].date;
  }
}
if (HighScore == undefined) {
  console.log(
    "il n'y a pas encore de highscore au lancement du site pour imprimé quoi que ce soit"
  );
} else {
  print();
}

var buttonStart = document
  .querySelector(".start")
  .addEventListener("click", check);
function check() {
  if (confirm("Prêt pour le defi ?")) {
    Start();
  } else {
    alert("Rhalala encore quelqu'un qui a peur de perdre trop vite...");
    nulll.play();
  }
}
function Start() {
  w++;
  document.querySelector(".hidestart").style.display = "block";
  document.getElementById("intro").style.display = "none";
  document.getElementById("pacman").style.display = "none";
  document.getElementById("mortal").style.display = "none";
  document.getElementById("target").style.display = "block";

  if (Crtkirby == 1) {
    select_kirby();
  }
  if (Crtmario == 1) {
    select_mario();
  }
  if (CrtspaceInvader == 1) {
    select_spaceInvader();
  }
  if (Crtsalameche == 1) {
    select_salameche();
  }

  if (
    Crtsalameche == 0 &&
    Crtkirby == 0 &&
    Crtmario == 0 &&
    CrtspaceInvader == 0
  ) {
    select_tetris();
  }

  if (w == 2) {
    document.getElementById("ufo").style.animation = "traveling 5s infinite";
    document.getElementById("ufo2").style.animation = " traveling2 5s infinite";
    document.getElementById("target").style.animation =
      "spin 1s infinite linear"; // -----------------------
    document.getElementById("fond").style.cursor =
      "url('assets/images/gun 3d.png') 81 40, auto";
    Timer();
    function Timer() {
      var inter = setInterval(function () {
        C.sec.val > 0 ? (C.sec.val -= x) : (C.sec.val = 0);
        C.sec.val < 10
          ? (C.sec.DOM.innerHTML = "0" + C.sec.val)
          : (C.sec.DOM.innerHTML = C.sec.val);

        if (C.min.val >= 1 && C.sec.val == 0) {
          C.min.val -= x;
          C.sec.val = 59;
        }
        if (C.sec.val < 30) {
          document.getElementById("sec").style.color = "orange"
        }
        if (C.sec.val < 10) {
          document.getElementById("sec").style.color = "red"
        }
        C.min.val < 10
          ? (C.min.DOM.innerHTML = "0" + C.min.val)
          : (C.min.DOM.innerHTML = C.min.val);
        if (C.sec.val == 0) {
          document.getElementById("sec").style.color = "black"
          clearInterval(inter);
          inter = 0;

          var name = prompt("What's your name ?");
          var datenouveau = new Date().toLocaleString();
          var nouveau = {
            nameofplayer: name,
            pointsofplayer: points,
            lvlofplayer: lvlPoints,
            date: datenouveau,
          };
          if (HighScore == undefined) {
            HighScore = [];
          }
          if (nouveau.nameofplayer == "") {
            nouveau.nameofplayer = "anonyme"
          }
          if (nouveau.nameofplayer == null) {
            nouveau.nameofplayer = "anonyme"
          }

          HighScore.push(nouveau);
          HighScore.sort((a, b) => a.pointsofplayer - b.pointsofplayer);
          HighScore.reverse();
          localStorage.setItem("highScores", JSON.stringify(HighScore));

          // -----------------------------------------------------------------Même action 5 fois pour inner html les highscore ---------------------------------------------------------------------
          if (HighScore[0] == null) {
            console.log("highscore 1 n'existe pas encore");
          } else {
            document.getElementById("namehighScore").innerText =
              "Name :" + " " + HighScore[0].nameofplayer;
            document.getElementById("lvlhighScore").innerText =
              "Points :" + " " + HighScore[0].pointsofplayer;
            document.getElementById("scorehighScore").innerText =
              "Lvl :" + " " + HighScore[0].lvlofplayer;
            document.getElementById("separation").innerText = "____________";
            document.getElementById("1").title = HighScore[0].date;
          }
          if (HighScore[1] == null) {
            console.log("highscore 2 n'existe pas encore");
          } else {
            document.getElementById("namehighScore2").innerText =
              "Name :" + " " + HighScore[1].nameofplayer;
            document.getElementById("lvlhighScore2").innerText =
              "Points :" + " " + HighScore[1].pointsofplayer;
            document.getElementById("scorehighScore2").innerText =
              "Lvl :" + " " + HighScore[1].lvlofplayer;
            document.getElementById("separation2").innerText = "____________";
            document.getElementById("2").title = HighScore[1].date;
          }

          if (HighScore[2] == null) {
            console.log("highscore 3 n'existe pas encore");
          } else {
            document.getElementById("namehighScore3").innerText =
              "Name :" + " " + HighScore[2].nameofplayer;
            document.getElementById("lvlhighScore3").innerText =
              "Points :" + " " + HighScore[2].pointsofplayer;
            document.getElementById("scorehighScore3").innerText =
              "Lvl :" + " " + HighScore[2].lvlofplayer;
            document.getElementById("separation3").innerText = "____________";
            document.getElementById("3").title = HighScore[2].date;
          }

          if (HighScore[3] == null) {
            console.log("highscore 4 n'existe pas encore");
          } else {
            document.getElementById("namehighScore4").innerText =
              "Name :" + " " + HighScore[3].nameofplayer;
            document.getElementById("lvlhighScore4").innerText =
              "Points :" + " " + HighScore[3].pointsofplayer;
            document.getElementById("scorehighScore4").innerText =
              "Lvl :" + " " + HighScore[3].lvlofplayer;
            document.getElementById("separation4").innerText = "____________";
            document.getElementById("4").title = HighScore[3].date;
          }

          if (HighScore[4] == null) {
            console.log("highscore 5 n'existe pas encore");
          } else {
            document.getElementById("namehighScore5").innerText =
              "Name :" + " " + HighScore[4].nameofplayer;
            document.getElementById("lvlhighScore5").innerText =
              "Points :" + " " + HighScore[4].pointsofplayer;
            document.getElementById("scorehighScore5").innerText =
              "Lvl :" + " " + HighScore[4].lvlofplayer;
            document.getElementById("separation5").innerText = "____________";
            document.getElementById("5").title = HighScore[4].date;
          }

          // --------------------------------------------------------------------------------------------------------------------------------------------c

          document.getElementById("target").style.display = "none";
          document.getElementById("game_over").style.display = "block";
          nyanCat.play();
          nyan = 1;
          nyanCat.loop = true;
          tetris.pause();
          mario.pause();
          spaceInvader.pause();
          kirby.pause();
          pokemon.pause();
          document.querySelector("body").style.animation =
            "color 5s infinite linear;";
            document.getElementById("reset").style.display = "block"
        }
      }, 100);
    }
  }

  // deplacement de la div
  var target = document.querySelector(".target");
  target.addEventListener("mouseover", moveTarget);
  function moveTarget() {
    setTimeout(function () {
      target.style.top = Math.floor(Math.random() * 700 + 1) + "px"; //Math.floor((Math.random() * 100) + 1);  Generates random number between 1 and 100
      target.style.left = Math.floor(Math.random() * 1020 + 1) + "px"; //Math.floor((Math.random() * 200) + 1);  Generates random number between 1 and 200
    }, vitesse);
  }
  // deplacement de la div ^^^^^^^^^^^^^^^^^^^^^^^^

  target.addEventListener("click", scorePlus);
  var score = document.getElementById("score");
  var points = 0;
  var NLpoints = 10;
  var lvlPoints = 1;
  var counter = 00;
  var MC = document.querySelector(".MC");
  MC.innerHTML = counter;
  var lvl = document.querySelector(".lvl");
  lvl.innerHTML = lvlPoints;
  var NL = document.querySelector(".PtsNL");
  NL.innerHTML = NLpoints;
  function scorePlus() {
    points += 2;
    score.innerHTML = points;
    NLpoints -= 2;
    NL.innerHTML = NLpoints;
    counter--;
    if (NLpoints == 0) {
      lvlPoints++;
      levelup.play();
      lvl.innerHTML = lvlPoints;
      NLpoints = lvlPoints * 10;
      NL.innerHTML = NLpoints;
    }
  }

  function scoreLess() {
    points > 0 ? (points -= 1) : (points = 0);
    score.innerHTML = points;
    NLpoints++;
    NL.innerHTML = NLpoints;
    counter++;
    MC.innerHTML = counter;
  }

  document.querySelector(".board").addEventListener("click", function (e) {
    if (e.pointerType == "mouse") {
      scoreLess();
    } else {
      alert("Impossible de jouer sans l'utilisation d'une souris... TRICHEUR");
    }
  });
}

function sound() {
  if (w == 2) {
    audio.play();
  }
}

function degat() {
  if (w == 2) {
    document.getElementById("target").src = "assets/images/degatFondNoir.jpg";
    setTimeout(function () {
      Character = document.getElementById("target").src = SrcCharacter;
    }, 250);
  }
}

function volume() {
  if (vol == 0) {
    document.getElementById("vol").style.display = "none";
    document.getElementById("volx").style.display = "block";
    audio.volume = 0;
    tetris.volume = 0;
    click_sound.volume = 0;
    mario.volume = 0;
    kirby.volume = 0;
    pokemon.volume = 0;
    spaceInvader.volume = 0;
    nyanCat.volume = 0;
    nulll.volume = 0;
    vol++;
  } else {
    document.getElementById("vol").style.display = "block";
    document.getElementById("volx").style.display = "none";
    audio.volume = 0.5;
    tetris.volume = 0.1;
    click_sound.volume = 0.1;
    mario.volume = 0.1;
    kirby.volume = 0.1;
    pokemon.volume = 0.1;
    spaceInvader.volume = 0.1;
    nyanCat.volume = 0.1;
    nulll.volume = 0.5;
    vol--;
  }
}

function difficult_easy() {
  document.getElementById("easy").disabled = true;
  document.getElementById("hard").disabled = false;
  document.getElementById("hard").style.backgroundColor = "white";
  document.getElementById("medium").disabled = false;
  document.getElementById("medium").style.backgroundColor = "white";
  document.getElementById("easy").style.backgroundColor = "green";
  document.getElementById("target").style.width = "80px";
  document.getElementById("target").style.height = "80px";
  document.getElementById("medium").disabled = false;
  document.getElementById("hard").disabled = false;
  vitesse = 700;
}

function difficult_medium() {
  document.getElementById("medium").disabled = true;
  document.getElementById("hard").style.backgroundColor = "white";
  document.getElementById("easy").style.backgroundColor = "white";
  document.getElementById("medium").style.backgroundColor = "green";
  document.getElementById("target").style.width = "50px";
  document.getElementById("target").style.height = "50px";
  document.getElementById("easy").disabled = false;
  document.getElementById("hard").disabled = false;
  vitesse = 350;
}

function difficult_hard() {
  document.getElementById("hard").disabled = true;
  document.getElementById("medium").style.backgroundColor = "white";
  document.getElementById("easy").style.backgroundColor = "white";
  document.getElementById("hard").style.backgroundColor = "green";
  document.getElementById("target").style.width = "30px";
  document.getElementById("target").style.height = "30px";
  document.getElementById("easy").disabled = false;
  document.getElementById("medium").disabled = false;
  vitesse = 150;
}

var Crttetris = 0;
var Crtmario = 0;
var CrtspaceInvader = 0;
var Crtkirby = 0;
var Crtsalameche = 0;

function select_tetris() {
  Crttetris++;
  document.getElementById("target").style.display = "block";
  SrcCharacter = "assets/images/tetris.png";
  document.getElementById("target").src = "assets/images/tetris.png";
  if (nyan == 0) {
    tetris.play();
  }

  tetris.loop = true;
  mario.pause();
  spaceInvader.pause();
  kirby.pause();
  pokemon.pause();
  Crtmario = 0;
  CrtspaceInvader = 0;
  Crtkirby = 0;
  Crtsalameche = 0;
}

function select_mario() {
  Crtmario++;
  document.getElementById("target").style.display = "block";
  SrcCharacter = "assets/images/mario.png";
  document.getElementById("target").src = "assets/images/mario.png";
  if (nyan == 0) {
    mario.play();
  }
  mario.loop = true;
  tetris.pause();
  spaceInvader.pause();
  kirby.pause();
  pokemon.pause();
  Crttetris = 0;
  CrtspaceInvader = 0;
  Crtkirby = 0;
  Crtsalameche = 0;
}

function select_spaceInvader() {
  CrtspaceInvader++;
  document.getElementById("target").style.display = "block";
  SrcCharacter = "assets/images/alien2.png";
  document.getElementById("target").src = "assets/images/alien2.png";
  if (nyan == 0) {
    spaceInvader.play();
  }
  spaceInvader.loop = true;
  tetris.pause();
  mario.pause();
  kirby.pause();
  pokemon.pause();
  Crttetris = 0;
  Crtmario = 0;
  Crtkirby = 0;
  Crtsalameche = 0;
}

function select_kirby() {
  Crtkirby++;
  document.getElementById("target").style.display = "block";
  SrcCharacter = "assets/images/kirby.png";
  document.getElementById("target").src = "assets/images/kirby.png";
  if (nyan == 0) {
    kirby.play();
  }
  kirby.loop = true;
  tetris.pause();
  mario.pause();
  spaceInvader.pause();
  pokemon.pause();
  Crttetris = 0;
  Crtmario = 0;
  CrtspaceInvader = 0;
  Crtsalameche = 0;
}

function select_salameche() {
  Crtsalameche++;
  document.getElementById("target").style.display = "block";
  SrcCharacter = "assets/images/salameche.png";
  document.getElementById("target").src = "assets/images/salameche.png";
  if (nyan == 0) {
    pokemon.play();
  }
  pokemon.loop = true;
  tetris.pause();
  mario.pause();
  kirby.pause();
  spaceInvader.pause();
  Crttetris = 0;
  Crtmario = 0;
  CrtspaceInvader = 0;
  Crtkirby = 0;
}

function coulissement() {
  if (click_coulissement == 1) {
    document.getElementById("coulissant").style.right = "0px";
    document.getElementById("arrow_settings").style.display = "none";
    document.getElementById("text_settings").style.display = "none";
    click_coulissement--;
  } else {
    document.getElementById("coulissant").style.right = "-205px";
    setTimeout(() => {
      document.getElementById("arrow_settings").style.display = "block";
      document.getElementById("text_settings").style.display = "block";
    }, 1000);
    click_coulissement++;
  }
}

function seeRules() {
  var livref = document.getElementById("icon_rules");
  var livreo = document.getElementById("icon_rules_open");
  if (z == 1) {
    livref.style.display = "none";
    livreo.style.display = "block";
    document.getElementById("div_rules").style.display = "block";
    z++;
  } else {
    livref.style.display = "block";
    livreo.style.display = "none";
    document.getElementById("div_rules").style.display = "none";
    z--;
  }
}

// function test() {
//   let separation = document.createElement("span");
//   separation.className = "separation";
//   separation.textContent = "____________";
//   document.getElementById("player_case").appendChild(separation);
// }

function Reset() {
  nyanCat.pause();
  nyan = 0;
  document.getElementById("target").style.display = "block";
  document.getElementById("game_over").style.display = "none";
  select_tetris()
  document.querySelector("body").style.animation =
  "color 5s infinite linear;";
  document.getElementById("reset").style.display = "none"

  C = {
    min: { val: 0, DOM: document.getElementById("min") },
    sec: { val: 60, DOM: document.getElementById("sec") },
  };
  w--
  points = 0;
  score.innerHTML = points;
  Start()
}