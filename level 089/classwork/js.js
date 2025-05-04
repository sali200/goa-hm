function checkAlive(health) {
    return health > 0;
  }
  





  function grow(x){
    let result = 1;
    for (let i = 0; i < x.lenghth; i++){
      result =x[1];
    }
    return result;
  }




  function fakeBin(x) {
    let result = '';
    for (let i = 0; i < x.length; i++) {
      if (x[i] < '5') {
        result += '0';
      } else {
        result += '1';
      }
    }
    return result;
  }
  