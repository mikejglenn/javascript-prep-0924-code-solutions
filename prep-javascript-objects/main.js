const person = {
  firstName: 'Mike',
  lastName: 'Glenn',
  hobby: 'Bass guitar',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'DevOps Engineer';
console.log("The person's current job is:", person.job);

person['previousJob'] = 'Support & Operations Engineer';
console.log("The person's previous job was:", person.previousJob);

console.log(person);
