function digitalRoot(n) {
    if (n < 10) {
        return n;
    }
    const sum = n.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    return digitalRoot(sum);
}







function countDigits(n) {
    return n.toString().length;
}





const areaOrPerimeter = function(l, w) {
    return l === w ? l * w : 2 * (l + w);
};







function makeNegative(num) {
    return num > 0 ? -num : num;
}







function opposite(number) {
    return -number;
}






