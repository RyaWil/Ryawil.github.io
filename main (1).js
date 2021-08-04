/*
Instructions
Compare Objects
- Define a function, `compareCities`, that accepts two objects as arguments.

compareCities({ name: 'Dresden' }, { name: 'Dresden' }) // -> true
compareCities({ name: 'Raleigh' }, { name: 'Raleigh', income_pc: 1200000 }) // -> false
*/
/*
Instructions
Compare Objects
- Define a function, `compareCities`, that accepts two objects as arguments.

compareCities({ name: 'Dresden' }, { name: 'Dresden' }) // -> true
compareCities({ name: 'Raleigh' }, { name: 'Raleigh', income_pc: 1200000 }) // -> false
*/
function compareCities(c1, c2) {
  // Add your code here
  const keys1 = Object.keys(c1);
  const keys2 = Object.keys(c2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (c1[key] !== c2[key]) {
      return false;
    }
  }
  return true;

}

//uncomment next lines to console log results
 console.log(compareCities({},{}))
 console.log(compareCities({name:'San Jose'},{name:'San Jose'}))
 console.log(compareCities({name:'San Jose'},{otherkey:'San Jose'}))

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = {
    compareCities,
  };
}




//uncomment next lines to console log results
 console.log(compareCities({},{}))
 console.log(compareCities({name:'San Jose'},{name:'San Jose'}))
 console.log(compareCities({name:'San Jose'},{otherkey:'San Jose'}))

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = {
    compareCities,
  };
}
