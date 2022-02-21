
const squareOne = document.getElementById('square_one');
const squareTwo = document.getElementById('square_two');
const squareThree = document.getElementById('square_three');
const squareFour = document.getElementById('square_four');
const squareFive = document.getElementById('square_five');
const squareSix = document.getElementById('square_six');
const squareSeven = document.getElementById('square_seven');
const squareEight = document.getElementById('square_eight');
const squareNine = document.getElementById('square_nine');

const squareOneText = document.getElementById('square_one_text');
const squareTwoText = document.getElementById('square_two_text');
const squareThreeText = document.getElementById('square_three_text');
const squareFourText = document.getElementById('square_four_text');
const squareFiveText = document.getElementById('square_five_text');
const squareSixText = document.getElementById('square_six_text');
const squareSevenText = document.getElementById('square_seven_text');
const squareEightText = document.getElementById('square_eight_text');
const squareNineText = document.getElementById('square_nine_text');

let game = document.getElementById('myWindow');
let tictactoe = new Array(3);
tictactoe[0] = new Array(3);
tictactoe[1] = new Array(3);
tictactoe[2] = new Array(3);
var player = 1;
var gameWon = 0;




function addText1() {
   if (checkMove(0, 0) == true) {
    if (player == 1) {
      squareOneText.textContent = 'X';
      tictactoe[0][0] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      squareOneText.textContent = 'O';
      tictactoe[0][0] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
};

squareOne.addEventListener('click', addText1);

function addText2() {
  if (checkMove(0, 1) == true) {
    if (player == 1) {
      squareTwoText.textContent = 'X';
      tictactoe[0][1] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      squareTwoText.textContent = 'O';
      tictactoe[0][1] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
};

squareTwo.addEventListener('click', addText2);

function addText3() {
  if (checkMove(0, 2) == true) {
    if (player == 1) {
      squareThreeText.textContent = 'X';
      tictactoe[0][2] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      squareThreeText.textContent = 'O';
      tictactoe[0][2] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
};

squareThree.addEventListener('click', addText3);

function addText4() {
  if (checkMove(1, 0) == true) {
    if (player == 1) {
      squareFourText.textContent = 'X';
      tictactoe[1][0] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      squareFourText.textContent = 'O';
      tictactoe[1][0] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
};

squareFour.addEventListener('click', addText4);

function addText5() {
  if (checkMove(1, 1) == true) {
    if (player == 1) {
      squareFiveText.textContent = 'X';
      tictactoe[1][1] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      squareFiveText.textContent = 'O';
      tictactoe[1][1] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
};

squareFive.addEventListener('click', addText5);

function addText6() {
  if (checkMove(1, 2) == true) {
    if (player == 1) {
      squareSixText.textContent = 'X';
      tictactoe[1][2] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      squareSixText.textContent = 'O';
      tictactoe[1][2] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
};

squareSix.addEventListener('click', addText6);

function addText7() {
  if (checkMove(2, 0) == true) {
    if (player == 1) {
      squareSevenText.textContent = 'X';
      tictactoe[2][0] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      squareSevenText.textContent = 'O';
      tictactoe[2][0] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
};

squareSeven.addEventListener('click', addText7);

function addText8() {
  if (checkMove(2, 1) == true) {
    if (player == 1) {
      squareEightText.textContent = 'X';
      tictactoe[2][1] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      squareEightText.textContent = 'O';
      tictactoe[2][1] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
};

squareEight.addEventListener('click', addText8);

function addText9() {
  if (checkMove(2, 2) == true) {
    if (player == 1) {
      squareNineText.textContent = 'X';
      tictactoe[2][2] = 'X';
      if (checkWin(1) == true) {
        endgame(1);
      }
      player = 2;
    } else {
      squareNineText.textContent = 'O';
      tictactoe[2][2] = 'O';
      if (checkWin(2) == true) {
        endgame(2);
      }
      player = 1;
    }
  }
};

squareNine.addEventListener('click', addText9);

function checkWin(playerNum) {
  for (i = 0; i < 3; i++) {
    if ((tictactoe[i][0] == tictactoe[i][1] && tictactoe[i][1] == tictactoe[i][2]) && tictactoe[i][0] != undefined && tictactoe[i][1] != undefined && tictactoe[i][2] != undefined) {
      return true;
    }
  }

  for (i = 0; i < 3; i++) {
    if ((tictactoe[0][i] == tictactoe[1][i] && tictactoe[1][i] == tictactoe[2][i]) && tictactoe[0][i] != undefined && tictactoe[1][i] != undefined && tictactoe[2][i] != undefined) {
      return true;
    }
  }

  if (((tictactoe[0][0] == tictactoe[1][1] && tictactoe[1][1] == tictactoe[2][2]) || (tictactoe[0][2] == tictactoe[1][1] && tictactoe[1][1] == tictactoe[2][0])) && tictactoe[1][1] !== undefined) {
    return true;
  }

  var tieGame = true;
  for (var i = 0; i < 3; i++) {
    for (var x = 0; x < 3; x++) {
      if (tictactoe[i][x] == null && tictactoe[i][x] == undefined) {
        tieGame = false;
      }
    }
  }

  if (tieGame == true) {
    endgame(0);
  }

  return false;
}

function checkMove(row, column) {
  console.log(tictactoe[row][column]);
  if (tictactoe[row][column] !== undefined && tictactoe[row][column] !== null) {
    return false;
  } else {
    return true;
  }
}

let text = document.querySelector('.window_text')
let myWindow = document.getElementById('myWindow')

function endgame(num) {
  if (num == 0) {
    text.textContent = 'Tie game!';
    myWindow.style.display = "block";
  }
  if (num == 1) {
    text.textContent = 'Player 1 Wins!';
    myWindow.style.display = "block";
  }
  if (num == 2) {
    text.textContent = 'Player 2 Wins!';
    myWindow.style.display = "block";
  }
}

const restart = document.getElementById('restart')
const audio = document.getElementById('audio');
const grid = document.querySelector('.content')

function again() {
  tictactoe = new Array(3);
  tictactoe[0] = new Array(3);
  tictactoe[1] = new Array(3);
  tictactoe[2] = new Array(3);
  player = 1;
  gameWon = 0;
  squareOneText.textContent = '';
  squareTwoText.textContent = '';
  squareThreeText.textContent = '';
  squareFourText.textContent = '';
  squareFiveText.textContent = '';
  squareSixText.textContent = '';
  squareSevenText.textContent = '';
  squareEightText.textContent = '';
  squareNineText.textContent = '';
  myWindow.style.display = "none";
  audio.play();
};

restart.addEventListener('click', again);



function fPlay() {
  audio.play();
}

grid.addEventListener('click', fPlay)
