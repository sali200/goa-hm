function grader(score) {
    switch (true) {
      case (score >= 0.9 && score <= 1):
        return 'A';
      case (score >= 0.8 && score < 0.9):
        return 'B';
      case (score >= 0.7 && score < 0.8):
        return 'C';
      case (score >= 0.6 && score < 0.7):
        return 'D';
      default:
        return 'F';
    }
  }
  



  function grader(score) {
    return (score >= 0.9 && score <= 1) ? 'A' :
           (score >= 0.8 && score < 0.9) ? 'B' :
           (score >= 0.7 && score < 0.8) ? 'C' :
           (score >= 0.6 && score < 0.7) ? 'D' : 'F';
  }
  