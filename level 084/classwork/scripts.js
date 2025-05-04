//codewarsebs vaketebt javaskriptze


function evenOrOdd(number) {
    return number %  2 === 0 ? "Even" : "Odd"
  }
  

  function getGrade (s1, s2, s3) {
    let score  = (s1 + s2 + s3) / 3
    
    if (90 <= score && score <= 100){
      return 'A';}
      else if (80 <= score && score<= 90){
      return 'B';}
      else if (70 <= score && score <= 80){
      return 'C';}
      else if (60 <= score && score <= 70){
      return 'D';}
      else {
      return 'F';}
  
  }

  function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8;
    } else {
      return number * 9;
    }
  }

  

  function makeNegative(number) {
    return number > 0 ? -number : number;
  }
   