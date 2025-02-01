function getGrade(a, b, c) {
    let average = (a + b + c) / 3;
  
    return (average > 90 && average < 100) ? 'A' :
           (average > 70 && average < 80) ? 'B' :
           (average > 50 && average < 65) ? 'C' :
           (average > 25 && average < 50) ? 'D' : 
           'წადი ისწავლე და მერე მოდი';
  }
  
 
  console.log(getGrade(95, 92, 94));
  console.log(getGrade(75, 72, 78)); 
  console.log(getGrade(55, 52, 60));
  console.log(getGrade(35, 32, 40)); 
  console.log(getGrade(15, 20, 10)); 
  


