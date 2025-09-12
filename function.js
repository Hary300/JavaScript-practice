'use strict';
console.log('==========');

// output { name: 'John', status: 'active' }
function createProfile(name) {
  'use strict';
  const status = 'active';

  return {
    name: name,
    status: status,
  };
}

console.log(createProfile('John'));

console.log('==========');

// output { orderId: 'ORD-001', total: 150, status: 'processed' }
function processOrder() {
  const orderId = 'ORD-001';
  let total = 100;
  total += 50;
  const status = 'processed';

  const order = {
    orderId: orderId,
    total: total,
    status: status,
  };
  return order;
}
console.log(processOrder());

console.log('==========');
// output
// {
//   "value": "hello",
//   "type": "string",
//   "isObject": false,
//   "isPrimitive": true
// }
function analyzeData(value) {
  const type = typeof value;
  const isObject = typeof value === 'object' && value !== null;
  const isPrimitive = typeof value !== 'object' && typeof value !== 'function';
  return {
    value: value,
    type: type,
    isObject: isObject,
    isPrimitive: isPrimitive,
  };
}

console.log(analyzeData('hello'));

console.log('==========');
// output 42
// function convertTypes(value, targetType) {
//   const numTarget = Number(targetType);

//   return value + numTarget;
// }
// console.log(convertTypes(10, '32'));

function convertTypes(value, targetType) {
  if (targetType === 'number') {
    const converted = Number(value);
    return isNaN(converted) ? null : converted;
  } else if (targetType === 'boolean') {
    return Boolean(value);
  } else if (targetType === 'string') {
    return String(value);
  } else {
    // Jika targetType bukan ketiga tipe di atas, kembalikan null
    return null;
  }
}

// Contoh penggunaan:
console.log(convertTypes('42', 'number')); // Output: 42

console.log('==========');
//  output
// {
//   "add": 8,
//   "subtract": 2,
//   "multiply": 15,
//   "divide": 1.67,
//   "modulus": 2,
//   "power": 125
// }

function mathOperations(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;
  const modulus = a % b;
  const power = a ** b;

  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    modulus: modulus,
    power: power,
  };
}

console.log(mathOperations(5, 3));

console.log('==========');

//output
/* {
  "equal": true,
  "strictEqual": false,
  "notEqual": false,
  "greater": false,
  "less": true,
  "greaterEqual": false,
  "lessEqual": true
} */

function compareValues(a, b) {
  const equal = a == b;
  const strictEqual = a === b;
  const notEqual = a != b;
  const greater = a > b;
  const less = a <= b;
  const greaterEqual = a > b;
  const lessEqual = a <= b;

  return {
    equal: equal,
    strictEqual: strictEqual,
    notEqual: notEqual,
    greater: greater,
    less: less,
    greaterEqual: greaterEqual,
    lessEqual: lessEqual,
  };
}

console.log(compareValues('5', 5));

console.log('==========');

//output "positive"

function checkConditions(number) {
  if (number > 0) {
    return 'positive';
  } else if (number < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
console.log(checkConditions(5));

console.log('==========');

//output
/* {
  "and": false,
  "or": true,
  "notA": false,
  "notB": true
} */

function logicOperations(a, b) {
  const and = a && b;
  const or = a || b;
  const notA = !a;
  const notB = !b;

  return {
    and: and,
    or: or,
    notA: notA,
    notB: notB,
  };
}

console.log(logicOperations(true, false));

console.log('==========');

//output
/* {
  "name": "John",
  "age": 0,
  "city": "Unknown"
}} */

function handleDefaults(data) {
  const name = data.name ?? 'No name';
  const age = data.age ?? null;
  const city = data.city ?? undefined;

  return {
    name,
    age,
    city,
  };
}

const input = {
  name: 'John',
  age: 0,
  city: 'Unknown',
};

console.log(handleDefaults(input));

// function handleDefaults(data) {
//    return {
//     name: data.name ?? 'No Name',
//     age: data.age ?? 18,
//     city: data.city ?? 'Jakarta',
//   };
// }

// const input = {
//   name: 'John',
//   age: 0,
//   city: 'Unknown',
// };

// console.log(handleDefaults(input));
