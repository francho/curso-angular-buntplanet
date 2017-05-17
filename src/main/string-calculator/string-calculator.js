
const sum = (a,b) => a + b;


export default texto => {
  if(texto==='') {
    return 0;
  }

  texto=texto.replace(new RegExp("\n", 'g'),',');

  return texto
    .split(',')
    .map(n => parseInt(n, 10))
    .reduce(sum);

}
