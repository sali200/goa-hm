function calculateSumAndProduct(first, second, ...rest) {
    console.log("ნამრავლი:", first * second); 
    console.log("ჯამი:", rest.reduce((sum, num) => sum + num, 0)); 
}

calculateSumAndProduct(3, 4, 5, 6, 7, 8);