function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "ლუწი";
    } else {
        return "კენტი";
    }
}
console.log(checkEvenOrOdd(4)); 
console.log(checkEvenOrOdd(7)); 





const checkEvenOrOdd = function(number) {
    return number % 2 === 0 ? "ლუწი" : "კენტი";
};
console.log(checkEvenOrOdd(4));
console.log(checkEvenOrOdd(7)); 


const checkEvenOrOdd = (number) => number % 2 === 0 ? "ლუწი" : "კენტი";
console.log(checkEvenOrOdd(4)); 
console.log(checkEvenOrOdd(7)); 