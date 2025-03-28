function assignMembership(members) {
  return members.map(([age, handicap]) => {
      if (age >= 55 && handicap > 7) {
          return "Senior";
      } else {
          return "Open";
      }
  });
}


const input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];



const output = assignMembership(input);
console.log(output); 








function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);

  if (Number.isInteger(sqrt)) {
        
      const nextNumber = sqrt + 1;
      return nextNumber * nextNumber;
  } else {

      return -1;
  }
}

console.log(findNextSquare(121)); 
console.log(findNextSquare(625)); 
console.log(findNextSquare(114)); 



