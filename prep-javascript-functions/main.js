function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers result:', sum); // 4

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes result:', minutes); // 120

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

const greeting = getGreeting('World');
console.log('getGreeting result:', greeting); // 'Hello World!'

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const sumTimesFive = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 result:', sumTimesFive); // 75

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const productDividedByFive = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 result:', productDividedByFive); // 70

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const difference = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers result:', difference); // 15

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}

const circumference = getCircleCircumference(5);
console.log('getCircleCircumference result:', circumference); // 31.41592653589793

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('Mike', 'Glenn');
console.log('getFullName result:', fullName); // Mike Glenn

function cube(number) {
  return number ** 3;
}

const cubed = cube(5);
console.log('cube result:', cubed); // 125
