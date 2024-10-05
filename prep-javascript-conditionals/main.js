/* Your JS goes in this file */
function isAdult(age) {
  // return age >= 18;
  if (age >= 18) {
    return true;
  }
  if (age < 18) {
    return false;
  }
}

let isAdultResult = isAdult(2);
console.log('age is 2:', isAdultResult);
isAdultResult = isAdult(18);
console.log('age is 18:', isAdultResult);
isAdultResult = isAdult(25);
console.log('age is 25:', isAdultResult);

function didStudentPass(score) {
  // return score >= 70;
  if (score >= 70) {
    return true;
  }
  if (score < 70) {
    return false;
  }
}

let didStudentPassResult = didStudentPass(25);
console.log('grade is 25:', didStudentPassResult);
didStudentPassResult = didStudentPass(70);
console.log('grade is 70:', didStudentPassResult);
didStudentPassResult = didStudentPass(92);
console.log('grade is 92:', didStudentPassResult);

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else if (score >= 100) {
    return 'A++';
  }
}

let gradeCalculatorResult = gradeCalculator(55);
console.log('grade is 55:', gradeCalculatorResult);
gradeCalculatorResult = gradeCalculator(65);
console.log('grade is 65:', gradeCalculatorResult);
gradeCalculatorResult = gradeCalculator(75);
console.log('grade is 75:', gradeCalculatorResult);
gradeCalculatorResult = gradeCalculator(85);
console.log('grade is 85:', gradeCalculatorResult);
gradeCalculatorResult = gradeCalculator(95);
console.log('grade is 95:', gradeCalculatorResult);
gradeCalculatorResult = gradeCalculator(105);
console.log('grade is 105:', gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'is is cold today';
  } else {
    return 'please enter a valid season';
  }
}

let seasonMessengerResult = seasonMessenger('summer');
console.log('season is summer:', seasonMessengerResult);
seasonMessengerResult = seasonMessenger('spring');
console.log('season is spring:', seasonMessengerResult);
seasonMessengerResult = seasonMessenger('autumn');
console.log('season is autumn:', seasonMessengerResult);
seasonMessengerResult = seasonMessenger('winter');
console.log('season is winter:', seasonMessengerResult);
seasonMessengerResult = seasonMessenger('january');
console.log('season is january:', seasonMessengerResult);

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend';
  } else {
    return 'It is a weekday!';
  }
}

let dayDetectorResult = dayDetector('saturday');
console.log('day is saturday:', dayDetectorResult);
dayDetectorResult = dayDetector('sunday');
console.log('day is sunday:', dayDetectorResult);
dayDetectorResult = dayDetector('monday');
console.log('day is monday:', dayDetectorResult);
