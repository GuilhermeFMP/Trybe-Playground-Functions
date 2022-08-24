// Desafio 1
function compareTrue(parameter1, parameter2) {
  if (parameter1 === true && parameter2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');

  return array;
}

// Desafio 4
function concatName(array) {
  let primeiroNome = '';
  let segundoNome = '';
  for (let index = 0; index < array.length; index += 1) {
    if (index === array.length - 1) {
      primeiroNome += array[index];
    } else if (index === 0) {
      segundoNome += array[index];
    }
  }
  let nomeComcatenato = `${primeiroNome}, ${segundoNome}`;
  return nomeComcatenato;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;

  let pontosGanhos = vitorias + empates;
  return pontosGanhos;
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let maiorNumero = Math.max.apply(null, array);

  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero === array[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
