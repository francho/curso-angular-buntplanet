const regExpSpecialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
const separadoresFijos = ["\n"];

const escape = regexpText => regExpSpecialChars.split('')
    .reduce((output, c) => output.replace(new RegExp(`\\${c}`, "g"), `\\${c}`), regexpText);

const replaceAll = (text, search, replacement) => text.replace(
    new RegExp(escape(search), "g"),
    replacement
);

const concat = (array1, array2) => array1.concat(array2);

const toInt = texto => parseInt(texto, 10);

const menorQue = m => n => n < m;

const sumar = (a, b) => a + b;

const normalizarSeparadores = (texto, separadores) => separadores.reduce(
    (output, separador) => replaceAll(output, separador, ','),
    texto
);

const extraerSeparadoresCabecera = input => {
  if (input.indexOf("//[") === 0)
    return input.substr(3, input.indexOf("\n") - 4).split("][");
  else if (input.indexOf("//") === 0)
    return [input[2]];
  return [];
};

const quitarCabecera = input => input.indexOf("//") === 0
    ? input.substring(input.indexOf("\n") + 1)
    : input;

const parsearNumeros = input => normalizarSeparadores(
    quitarCabecera(input),
    concat(separadoresFijos, extraerSeparadoresCabecera(input))
).split(',').map(toInt);

const checkNegativos = numeros => {
  const numerosNegativos = numeros.filter(menorQue(0));
  if (numerosNegativos.length > 0)
    throw new Error(`No se admiten números negativos: ${numerosNegativos.join(", ")}`);
};

export default input => {
  if (input === "")
    return 0;

  const numeros = parsearNumeros(input);

  checkNegativos(numeros);

  let numerosSumables = numeros.filter(menorQue(1000));

  return numerosSumables.reduce(sumar, 0);
};
