module.exports = function toReadable (number) {
  let i = (number.toString().length - 1);
  let digit = '';
  let char1= '';
  let char2= '';
  let char3= '';
  if (number === 0) {
    return 'zero';
  }
  while (i >= 0) {
    switch (number.toString()[i]) {
      case '0': digit = '';
      break;
      case '1': digit = 'one';
      break;
      case '2': digit = 'two';
      break;
      case '3': digit = 'three';
      break;
      case '4': digit = 'four';
      break;
      case '5': digit = 'five';
      break;
      case '6': digit = 'six';
      break;
      case '7': digit = 'seven';
      break;
      case '8': digit = 'eight';
      break;
      case '9': digit = 'nine';
      break;
    }

    if (i === (number.toString().length - 1)) {
     char1 = digit;
    } 
    else if (i === (number.toString().length - 2)) {
      if (number.toString()[i] === 2) {
        char1 = '';
        switch (number.toString().slice(i)) {
          case '10': char2 = 'ten';
          break;
          case '11': char2 = 'eleven ';
          break;
          case '12': char2 = 'twelve ';
          break;
          case '13': char2 = 'thirteen ';
          break;
          case '14': char2 = 'fourteen ';
          break;
          case '15': char2 = 'fifteen ';
          break;
          case '16': char2 = 'sixteen ';
          break;
          case '17': char2 = 'seventeen ';
          break;
          case '18': char2 = 'eighteen ';
          break;
          case '19': char2 = 'nineteen ';
          break;
        }
      } else if (number.toString()[i] >= 2) {
        switch (number.toString()[i]) {
          case '2': char2 = 'twenty ';
          break;
          case '3': char2 = 'thirty ';
          break;
          case '4': char2 = 'forty ';
          break;
          case '5': char2 = 'fifty ';
          break;
          case '6': char2 = 'sixty ';
          break;
          case '7': char2 = 'seventy ';
          break;
          case '8': char2 = 'eighty ';
          break;
          case '9': char2 = 'ninety ';
          break;
        }
      }
    } else if (i === (number.toString().length - 3)) {
      char3 = `${digit}${' hundred '}`
    }
    i = i - 1;
  };
  return (`${char3}${char2}${char1}`);
}
