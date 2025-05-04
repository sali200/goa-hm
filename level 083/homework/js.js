function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "ლუწი";
    } else {
      return "კენტი";
    }
  }
  

  let num = 5;
  console.log(evenOrOdd(num)); 







  function temperatureDescription(celsius) {
    if (celsius <= 0) {
      return "ცივი";
    } else if (celsius > 0 && celsius <= 20) {
      return "ზომიერი";
    } else {
      return "ცხელი";
    }
  }

  let temp = 15;
  console.log(temperatureDescription(temp)); 






  function grade(score) {
    if (score >= 90 && score <= 100) {
      return "A";
    } else if (score >= 80 && score < 90) {
      return "B";
    } else if (score >= 70 && score < 80) {
      return "C";
    } else if (score >= 60 && score < 70) {
      return "D";
    } else if (score >= 0 && score < 60) {
      return "F";
    } else {
      return "არასწორი ქულა";
    }
  }
  

  let score = 85;
  console.log(grade(score));  
  
  
  