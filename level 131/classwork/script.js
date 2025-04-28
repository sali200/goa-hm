'use strict';

B = 9
console.log(B)
// შეცდომა არის იმიტომრომ ცვლად B - ს არ აქვს ცვლადის ნიშანი


function A(c){
    
    'use strict';

    console.log(c + c) // შეცდომა არის ის რომ ორი ცვლადი C ემატება ერთმანეთს და მას აქვს ერთი და იგივე სახელი
}



'use strict'; // გლობალური strict mode


function D() {
    'use strict'; // ლოკალური strict mode
}