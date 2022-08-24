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
function splitSentence(text) {
  let array = text.split(' ');

  return array;
}

// Desafio 4
function concatName(textlist) {
  let primeiroNome = '';
  let segundoNome = '';
  for (let index = 0; index < textlist.length; index += 1) {
    if (index === textlist.length - 1) {
      primeiroNome += textlist[index];
    } else if (index === 0) {
      segundoNome += textlist[index];
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
function highestCount(numbers) {
  let count = 0;
  let maiorNumero = Math.max.apply(null, numbers);

  for (let index = 0; index < numbers.length; index += 1) {
    if (maiorNumero === numbers[index]) {
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
function dividedFor3and5(number, divider) {
  return number % divider === 0;
}

function getText(number) {
  if (dividedFor3and5(number, 3) && dividedFor3and5(number, 5)) return 'fizzBuzz';

  if (dividedFor3and5(number, 3)) return 'fizz';

  if (dividedFor3and5(number, 5)) return 'buzz';

  return 'bug!';
}

function fizzBuzz(numberlist) {
  let textlist = [];
  for (let index = 0; index < numberlist.length; index += 1) {
    let number = numberlist[index];
    textlist.push(getText(number));
  }
  return textlist;
}

// Desafio 9
function vogalForNumber(vogal) {
  if (vogal === 'a') return '1';

  if (vogal === 'e') return '2';

  if (vogal === 'i') return '3';

  if (vogal === 'o') return '4';

  if (vogal === 'u') return '5';

return vogal;
}

function encode(string) {
  let newCode = '';
  for (let index = 0; index < string.length; index += 1) {
    let vogal = string[index];
    newCode += vogalForNumber(vogal);
  }
  return newCode;
}

function numberForVogal(number) {
  if (number === '1') return 'a';

  if (number === '2') return 'e';

  if (number === '3') return 'i';

  if (number === '4') return 'o';

  if (number === '5') return 'u';

return number;
}

function decode(string) {
  let newCode = '';
  for (let index = 0; index < string.length; index += 1) {
    let number = string[index];
    newCode += numberForVogal(number);
  }
  return newCode;
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
