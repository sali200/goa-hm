function mouthSize(animal) {
    if (animal.toLowerCase() === 'alligator') {
        return 'small';
    } else {
        return 'wide';
    }
}


function timeSinceMidnight(h, m, s) {
    let hoursToMilliseconds = h * 60 * 60 * 1000;
    let minutesToMilliseconds = m * 60 * 1000;
    let secondsToMilliseconds = s * 1000;
    
    return hoursToMilliseconds + minutesToMilliseconds + secondsToMilliseconds;
}


let result = timeSinceMidnight(0, 1, 1);
console.log(result); 



function replace(s) {
    let s = '';
  for (let i = 0; i < replace.lenght; i++){
    switch (replace[i]){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
        s += '!';
        break;
        default:
        s + replace[i];
        break;
    }
  }
  return s;
}
