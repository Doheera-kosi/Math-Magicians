import Big from 'big.js';

export default function operate(numOne, numTwo, operation) {
  const one = Big(numOne);
  const two = Big(numTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    try {
      return one.div(two).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operation === '%') {
    try {
      return one.mod(two).toString();
    } catch (err) {
      return "Can't find modulo as can't divide by 0.";
    }
  }
  throw Error(`UnExpected operation '${operation}'`);
}
