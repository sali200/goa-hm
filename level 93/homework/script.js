function getUserData() {
    let name = prompt("შეიყვანეთ თქვენი სახელი:");
    let age = prompt("შეიყვანეთ თქვენი ასაკი:");
    let distance = prompt("სამუშაო ადგილამდე მანძილი (კმ-ში):");
    let workDays = prompt("სამუშაო დღეების რაოდენობა კვირაში (0-დან 7-მდე):");
  
    return {
      name: name,
      age: parseInt(age),
      distance: parseFloat(distance),
      workDays: parseInt(workDays)
    };
  }

  


  function recommendTransport(user) {
    if (user.age < 16) {
      console.log("გთხოვთ, მოითხოვოთ გამგზავრების ნებართვა უფროსისგან.");
      return;
    }
    
    if (user.age >= 16 && user.age < 65) {
      if (user.distance >= 0 && user.distance <= 5) {
        console.log("რეკომენდირებული ტრანსპორტი არის ველოსიპედი.");
      } else if (user.distance > 5 && user.distance <= 20) {
        console.log("რეკომენდირებული ტრანსპორტი არის მანქანა.");
      } else if (user.distance > 20) {
        console.log("რეკომენდირებული ტრანსპორტი არის მატარებელი.");
      }
    }
  
    if (user.workDays >= 5) {
      console.log("სთხოვეთ შეღავათების მიღება ტრანსპორტზე.");
    }
  }

  



  function runTransportRecommendationProgram() {
    let user = getUserData();
    recommendTransport(user);
  }
  
  runTransportRecommendationProgram();

  

  function getUserRunningData() {
    let name = prompt("შეიყვანეთ თქვენი სახელი:");
    let age = prompt("შეიყვანეთ თქვენი ასაკი:");
    let dailyRunningDistance = prompt("ყოველდღიური სირბილის რაოდენობა (კმ-ში):");
    let runningDays = prompt("სავარჯიშო დღეების რაოდენობა კვირაში (0-დან 7-მდე):");
  
    return {
      name: name,
      age: parseInt(age),
      dailyRunningDistance: parseFloat(dailyRunningDistance),
      runningDays: parseInt(runningDays)
    };
  }
  
  function evaluateRunning(user) {
    if (user.age < 16 || user.age > 60) {
      console.log("გთხოვთ, გაიაროთ ექიმის კონსულტაცია.");
      return;
    }
  
    let totalWeeklyRunningDistance = user.dailyRunningDistance * user.runningDays;
    if (totalWeeklyRunningDistance < 20) {
      console.log("შესაძლებელია მეტი ვარჯიში.");
    } else {
      console.log("ძალიან კარგი! შენ საკმარისი ვარჯიში გაქვს.");
    }
  }
  
  function runRunningEvaluationProgram() {
    let user = getUserRunningData();
    evaluateRunning(user);
  }
  
  runRunningEvaluationProgram();

  







  