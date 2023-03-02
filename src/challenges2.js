// Desafio 11
function verificaNumero(numero) {
  if (numero < 10 && numero >= 0) {
    return true;
  }
}

function tem11Numeros(telefone) {
  if (telefone.length === 11) {
    return true;
  }
}

function addCount(num1, num2) {
  if (num1 === num2) {
    return 1;
  }
  return 0;
}

function maisDeTres(nums) {
  for (let index = 0; index < nums.length; index += 1) {
    let count = 0;
    for (let index2 = 0; index2 < nums.length; index2 += 1) {
      count += addCount(nums[index], nums[index2]);
    }
    if (count >= 3) {
      return true;
    }
  }
}

function generateNumber(arrayNumeros) {
  let numero = '(';
  for (let index = 0; index < 2; index += 1) {
    numero += arrayNumeros[index];
  }
  numero += ') ';
  for (let index = 2; index < 7; index += 1) {
    numero += arrayNumeros[index];
  }
  numero += '-';
  for (let index = 7; index < arrayNumeros.length; index += 1) {
    numero += arrayNumeros[index];
  }
  return numero;
}

function generatePhoneNumber(numerosTelefone) {
  if (tem11Numeros(numerosTelefone) !== true) {
    return 'Array com tamanho incorreto.';
  }
  if (maisDeTres(numerosTelefone) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let index = 0; index < numerosTelefone.length; index += 1) {
    if (verificaNumero(numerosTelefone[index]) !== true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return generateNumber(numerosTelefone);
}

// Desafio 12
function sidesCheck(a, b, c) {
  if ((a + b > c) && (a + c > b) && (b + c > a)) {
    return true;
  }
  return false;
}

function positiveCheck(a, b, c) {
  if ((a > 0) && (b > 0) && (c > 0)) {
    return true;
  }
  return false;
}

function triangleCheck(a, b, c) {
  if ((sidesCheck(a, b, c)) && positiveCheck(a, b, c)) {
    return true;
  }

  return false;
}

// Desafio 13
function hydrate(glass) {
  let numbers = glass.match(/\d+/g);
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += Number(numbers[index]);
  }
  let valor = String(sum);
  if (sum === 1) {
    return `${valor} copo de água`;
  }
  return `${valor} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
