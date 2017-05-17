
export default texto => {
  let result = 0;

  if(texto==='') {
    return result;
  }

  texto=texto.replace(new RegExp("\n", 'g'),',');
  const numbers = texto.split(',');

  for(let number of numbers) {
    result += parseInt(number)
  }

  return result;
}
