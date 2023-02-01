'use strict';

const inventors = [
  {first: 'al', last: 'fddsad', year: 433, passed: 500},
  {first: 'bl', last: 'ddda', year: 4523, passed: 4234},
  {first: 'dsl', last: 'fdddsa', year: 433, passed: 4234},
  {first: 'ad', last: 'fddd', year: 6343, passed: 4234},
  {first: 'sl', last: 'fddad', year: 423, passed: 4234},
];

const people = ['to, sh', 'bfdf, bfsa', 'gf, fed', 'afsfg, afs']



const inventors433 = inventors.filter(inventor => inventor.year >= 433 && inventor.year <= 500);
console.table(inventors433);


const inventorsNames = inventors.map(inventor => `${inventor.first} ${inventor.last} `)
console.log(inventorsNames)


const inventorsSortBirthdate = inventors.sort((a, b) =>  a.year - b.year)
console.table(inventorsSortBirthdate)


const inventorYearsLived = inventors.reduce((acc, number) => acc + number.passed - number.year, 0);
console.log(inventorYearsLived)


const inventrosSortByYears = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
console.table(inventrosSortByYears);


const peopleSortByLastName = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast.localeCompare(bLast)

})
console.log(peopleSortByLastName)

const data = ['pos', 'fsff', 'tef', 'tek', 'rok'];

const transportation = data.reduce((obj, item) => {
  if(!obj[item]) {
    obj[item] = 0;
  }

  obj[item]++;
  return obj;

}, {});

console.log(transportation)