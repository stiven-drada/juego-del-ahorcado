const btnStart = document.querySelector(".ahorcado__btn-start");
const canvas = document.querySelector(".ahorcado__ilustration");
const wrongLetters = document.querySelector(".ahorcado__wrong-letters");
const containerMatch = document.querySelector(".ahorcado__match-letters");
import arrayWords from "./palabras";
// lista de herramientas para aprender a utilizar
// canvas,expreciones regulares,el objeto math
let word;
let winer = [];

const ctx = canvas.getContext("2d");

const bodyParts = [
  [4, 2, 1, 1],
  [4, 3, 1, 2],
  [3, 5, 1, 1],
  [5, 5, 1, 1],
  [3, 3, 1, 1],
  [5, 3, 1, 1],
];
function randomWord(arrayWords) {
  let indexRandom = Math.floor(Math.random() * arrayWords.length);
  let word = arrayWords[indexRandom];
  return word;
}

function containerwords(word) {
  if (containerMatch.children.length > 0) containerMatch.innerHTML = "";

  let letters = word.split("");

  letters.forEach(() => {
    let span = document.createElement("span");
    span.innerText = " ";
    containerMatch.appendChild(span);
  });
  return word;
}
// escucho el evento del teclado este dever ser una letra no numeros
// revisar cuantas veces esta la letra en la palabra y si el contenedor de la palabras ya lo tine omitimos
// y verificar en que posisines esta la letra

function startGame() {
  wrongLetters.innerHTML = "";
  ctx.canvas.width = 120;
  ctx.canvas.height = 160;
  ctx.fillStyle = "#d95d39";
  ctx.scale(20, 20);
  ctx.fillRect(0, 7, 4, 1);
  ctx.fillRect(1, 0, 1, 8);
  ctx.fillRect(1, 0, 4, 1);
  ctx.fillRect(4, 1, 1, 1);

  word = randomWord(arrayWords);
  containerwords(word);
  console.log(word);
  winer = [];

  document.addEventListener("keyup", (e) => {
    winOrLose(e.key, word);
  });
}

btnStart.addEventListener("click", startGame);

// https://www.freecodecamp.org/espanol/news/expresiones-regulares-regex-en-javascript-manual-para-principiantes/

function winOrLose(key, word) {
  if (key.length === 1 && /[a-z]/gi.test(key)) {
    let regex = new RegExp(`${key}`, "i");
    let re = new RegExp(`${key}`, "ig");

    if (regex.test(word)) {
      for (let i = 0; i <= word.length; i++) {
        if (word[i] === key) {
          containerMatch.children[i].innerHTML = word[i];
          console.log(i, word[i]);

          winer[i] = word[i];
        }
      }
    } else {
      wrongLetters.innerHTML += key; // las letras que no coincidan las agrega al parrafo de letras incorrectas
      ctx.fillStyle = "white";
      ctx.fillRect(...bodyParts[wrongLetters.innerText.length - 1]); // apllica una parte del ahorcado
      if (wrongLetters.innerText.length >= 6) {
        window.alert("perdiste");
      } // verifica si  a  escrito 6
    }

    if (winer.join("") === word) {
      console.log("win");
      startGame();
    }
  }
}
