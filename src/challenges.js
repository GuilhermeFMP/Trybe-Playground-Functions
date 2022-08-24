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
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = cat1 - mouse;
  let distanciaGato2 = cat2 - mouse;
  if (distanciaGato1 < 0) {
    distanciaGato1 *= -1;
  } else if (distanciaGato2 < 0) {
    distanciaGato2 *= -1;
  }
  if (distanciaGato1 === distanciaGato2) {
    return 'os gatos trombam e o rato foge';
  } if (distanciaGato1 > distanciaGato2) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
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
