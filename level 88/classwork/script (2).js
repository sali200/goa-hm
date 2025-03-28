let goa= 0;
while (goa < 50) {
    console.log('GOA');
    goa++;
}






let number = 20;
while (number >= 0) {
    console.log(number);
    number--;
}

let even= 1;
while (even <= 20) {
    if (even % 2 === 0) {
        console.log(even);
    }
    even++;
}




let nmb = 1;
while (nmb <= 100) {
    if (nmb % 5 === 0) {
        console.log(nmb);
    }
    nmb++;
}







function startTimer(seconds) {
    let remainingTime = seconds;

    while (remainingTime >= 0) {
        console.log(remainingTime);
        remainingTime--;
    }
    console.log("Timer finished!");
}



startTimer(10);



