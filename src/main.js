const btnStart = document.querySelector(".ahorcado__btn-start");
const canvas = document.querySelector(".ahorcado__ilustration");
const wrongLetters = document.querySelector(".ahorcado__wrong-letters");
const containerMatch = document.querySelector(".ahorcado__match-letters");
import words from "./palabras";
// lista de herramientas para aprender a utilizar
// canvas,expreciones regulares,el objeto math
let word;

const ctx = canvas.getContext("2d");

const bodyParts = [
  [4, 2, 1, 1],
  [4, 3, 1, 2],
  [3, 5, 1, 1],
  [5, 5, 1, 1],
  [3, 3, 1, 1],
  [5, 3, 1, 1],
];
function wordRandom(arrayWords) {
  let indexRandom = Math.floor(Math.random() * arrayWords.length);
  return arrayWords[indexRandom];
}

function containerwords(word) {
  if (containerMatch.children.length > 0) containerMatch.innerHTML = "";

  let letters = word.split("");

  letters.forEach(() => {
    let span = document.createElement("span");
    span.innerText = " ";
    containerMatch.appendChild(span);
  });
  return { letters, word };
}
// escucho el evento del teclado este dever ser una letra no numeros
// revisar cuantas veces esta la letra en la palabra y si el contenedor de la palabras ya lo tine omitimos
// y verificar en que posisines esta la letra

function startGame() {
  ctx.canvas.width = 120;
  ctx.canvas.height = 160;
  ctx.fillStyle = "#d95d39";
  ctx.scale(20, 20);
  ctx.fillRect(0, 7, 4, 1);
  ctx.fillRect(1, 0, 1, 8);
  ctx.fillRect(1, 0, 4, 1);
  ctx.fillRect(4, 1, 1, 1);

  word = containerwords(wordRandom(words));
}

btnStart.addEventListener("click", startGame);

document.addEventListener("keyup", (e) => console.log(typeof e.key));

//  exiten 2 formas de crear expreciones regulares (regex): notacion literal o el constructor RegExp
// 1 notacion lietaral involucra encerrar el patron en barras. ejemplo : /patron/
// 2 usando la funcion de constructor RegExp

let str = "Hello world! This is a test string.";
let regex = /o/g;

let matches = str.matchAll(regex);

for (let match of matches) {
  console.log(match);
}

// argumento de patron
//  / ^\d/
// https://www.freecodecamp.org/espanol/news/expresiones-regulares-regex-en-javascript-manual-para-principiantes/
