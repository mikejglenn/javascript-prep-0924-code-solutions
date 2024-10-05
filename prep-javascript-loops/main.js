// create your loops here.
function whileLoop1() {
  const numArray = [];
  let index = 0;
  while (index < 10) {
    numArray.push(index);
    index++;
  }
  return numArray;
}

const whileLoop1Result = whileLoop1();
console.log('whileLoop1 output', whileLoop1Result);

function whileLoop2() {
  const numArray = [];
  let index = 0;
  while (index < 20) {
    numArray.push(index);
    index += 2;
  }
  return numArray;
}

const whileLoop2Result = whileLoop2();
console.log('whileLoop2 output', whileLoop2Result);

function forLoop1() {
  const numArray = [];
  for (let index = 0; index < 10; index++) {
    numArray.push(index);
  }
  return numArray;
}

const forLoop1Result = forLoop1();
console.log('forLoop1 output', forLoop1Result);

function forLoop2() {
  for (let index = 100; index > 0; index--) {
    console.log('Time till explosion ' + index + '!');
  }
}

forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const nameArray = [];
  for (const key in object) {
    nameArray.push(key);
  }
  return nameArray;
}

const forInLoop1Result = forInLoop1(person);
console.log('for in loop 1 output', forInLoop1Result);

function forInLoop2(object) {
  const valueArray = [];
  for (const key in object) {
    valueArray.push(object[key]);
  }
  return valueArray;
}

const forInLoop2Result = forInLoop2(person);
console.log('for in loop 2 output', forInLoop2Result);
