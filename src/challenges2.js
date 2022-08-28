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

function maisDeTres(nums) {
  for (let index = 0; index < nums.length; index += 1) {
    let count = 0;
    for (let index2 = 0; index2 < nums.length; index2 += 1) {
      if (nums[index] === nums[index2]) {
        count += 1;
      }
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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function filterInt(valor) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(valor)) { return Number(valor); }
  return NaN;
}

function hydrate(glass) {
  let numbers = glass.match(/\d+/g);
  let numeros = '';
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    numeros += numbers[index];
  }

  let numeros2 = filterInt(numeros);
  for (let index = 0; index < numeros2.length; index += 1) {
    sum += numeros2[index];
  }
  return numeros2;
}

// console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
