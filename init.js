/*
  Source from: https://www.freecodecamp.org/news/build-a-wordle-clone-in-javascript/
*/

// IMPORT WORDS FROM WORDS.js FILE

let currentGuess = [];
let nullArr = [];
let yellowArr = [];
let greenArr = [];
let stringArr = []
let colorBox1 = 0;
let colorBox2 = 0;
let colorBox3 = 0;
let colorBox4 = 0;
let colorBox5 = 0;

let nextLetter = 0;

function insertLetter (pressedKey) {
    if (nextLetter === 5) {
        return;
    }

    pressedKey = pressedKey.toLowerCase();

    let row = document.getElementsByClassName("letter-row")[0];
    let box = row.children[nextLetter];
    box.textContent = pressedKey;
    box.classList.add("filled-box");
    currentGuess.push(pressedKey);
    nextLetter += 1;
}

function deleteLetter () {
    let row = document.getElementsByClassName("letter-row")[0];
    let box = row.children[nextLetter - 1];
    box.textContent = "";
    box.classList.remove("filled-box");
    currentGuess.pop();
    nextLetter -= 1;
}

function compileGuess(arr) {
  // 1 = green
  // 2 = yellow
  // 0 - red (null)

  greenArr = []
  yellowArr = []
  nullArr = []

  let index0 = colorBox1;
  let index1 = colorBox2;
  let index2 = colorBox3;
  let index3 = colorBox4;
  let index4 = colorBox5;

  // switch case might be better here tbh

  if (index0 === 1) {
    greenArr.push(arr[0] + '0');
  }
  if (index0 === 2) {
    yellowArr.push(arr[0] + '0');
  }
  if (index0 === 0) {
    nullArr.push(arr[0]);
  }

  if (index1 === 1) {
    greenArr.push(arr[1] + '1');
  }
  if (index1 === 2) {
    yellowArr.push(arr[1] + '1');
  }
  if (index1 === 0) {
    nullArr.push(arr[1]);
  }

  if (index2 === 1) {
    greenArr.push(arr[2] + '2');
  }
  if (index2 === 2) {
    yellowArr.push(arr[2] + '2');
  }
  if (index2 === 0) {
    nullArr.push(arr[2]);
  }

  if (index3 === 1) {
    greenArr.push(arr[3] + '3');
  }
  if (index3 === 2) {
    yellowArr.push(arr[3] + '3');
  }
  if (index3 === 0) {
    nullArr.push(arr[3]);
  }

  if (index4 === 1) {
    greenArr.push(arr[4] + '4');
  }
  if (index4 === 2) {
    yellowArr.push(arr[4] + '4');
  }
  if (index4 === 0) {
    nullArr.push(arr[4]);
  }

  console.log(greenArr);
  console.log(yellowArr);
  console.log(nullArr);


}

document.addEventListener("keyup", (e) => {
    let pressedKey = String(e.key);


    if (pressedKey === "Backspace" && nextLetter !== 0) {
        deleteLetter();
        stringArr.pop();
    }

    if (pressedKey === "Enter") {
      compileGuess(stringArr);
    }

    let found = pressedKey.match(/[a-z]/gi);
    if (!found || found.length > 1 || stringArr.length > 5) {
        return;
    } else {
        insertLetter(pressedKey);
        stringArr.push(pressedKey);
    }

    if (stringArr.length > 5) {
      stringArr.splice(0, 1);
    }
})

$("#box1").on("click", function () {
  switch (colorBox1) {
    case 0:
      $("#box1").css("background", "green");
      colorBox1 = 1;
      break
    case 1:
      $("#box1").css("background", "yellow");
      colorBox1 = 2;
      break
    case 2:
      $("#box1").css("background", "red");
      colorBox1 = 0;
      break
  }
});

$("#box2").on("click", function () {
  switch (colorBox2) {
    case 0:
      $("#box2").css("background", "green");
      colorBox2 = 1;
      break
    case 1:
      $("#box2").css("background", "yellow");
      colorBox2 = 2;
      break
    case 2:
      $("#box2").css("background", "red");
      colorBox2 = 0;
      break
  }
});

$("#box3").on("click", function () {
  switch (colorBox3) {
    case 0:
      $("#box3").css("background", "green");
      colorBox3 = 1;
      break
    case 1:
      $("#box3").css("background", "yellow");
      colorBox3 = 2;
      break
    case 2:
      $("#box3").css("background", "red");
      colorBox3 = 0;
      break
  }
});

$("#box4").on("click", function () {
  switch (colorBox4) {
    case 0:
      $("#box4").css("background", "green");
      colorBox4 = 1;
      break
    case 1:
      $("#box4").css("background", "yellow");
      colorBox4 = 2;
      break
    case 2:
      $("#box4").css("background", "red");
      colorBox4 = 0;
      break
  }
});

$("#box5").on("click", function () {
  switch (colorBox5) {
    case 0:
      $("#box5").css("background", "green");
      colorBox5 = 1;
      break
    case 1:
      $("#box5").css("background", "yellow");
      colorBox5 = 2;
      break
    case 2:
      $("#box5").css("background", "red");
      colorBox5 = 0;
      break
  }
});

// $("#box1").css("background", "red");
