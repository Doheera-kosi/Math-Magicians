import operate from './operator';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

// Given a btn name and a calculator data obj, return an updated
// calculator data obj.

//  Calculator Data obj contains:
//    total:s      the running total
//    next:String       the next number to be operated on with the total
//    operation:String  +, -, %, /, *.

export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }

    // Update next and perform operation if there's any
    if (obj.operation) {
      if (obj.next && obj.next !== '0') {
        return { ...obj, next: obj.next + buttonName };
      }
      return { ...obj, next: buttonName };
    }

    // Update next and clear the values, when there's no any operation to perform,
    if (obj.next && obj.next !== '0') {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { ...obj, next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { ...obj, next: `${obj.total}.` };
    }
    return { ...obj, next: '0.' };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }
    // without any operation, return nothing
    return {};
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  // (=) pressed before pressing operation
  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: buttonName };
  }

  // When the uer pressed any btn and there's action existing
  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: buttonName };
    }

    if (!obj.total) {
      return { total: 0, operation: buttonName };
    }

    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // When the user has not typed in any number yet, save the operation
  if (!obj.next) {
    return { operation: buttonName };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
