let book = {
    title: "დიდი ავტორის წიგნი",
    author: "მიხეილ ჯავახიშვილი",
    year: 2021,
    genre: "ფანტასტიკა",
    price: 29.99
  };


  console.log(book);


// Dot Notation
console.log(book.title);  // "დიდი ავტორის წიგნი"
console.log(book.author); // "მიხეილ ჯავახიშვილი"
console.log(book.year);   // 2021
console.log(book.genre);  // "ფანტასტიკა"
console.log(book.price);  // 29.99

// Bracket Notation
console.log(book["title"]);  // "დიდი ავტორის წიგნი"
console.log(book["author"]); // "მიხეილ ჯავახიშვილი"
console.log(book["year"]);   // 2021
console.log(book["genre"]);  // "ფანტასტიკა"
console.log(book["price"]);  // 29.99



console.log(`წიგნი "${book.title}", რომელიც დაწერილია ${book.author}-ის მიერ და გამოსულია ${book.year} წელს, არის ${book.genre} ჟანრის და ღირს ${book.price} ლარი.`);




let student = {
    name: "ირაკლი კვარაცხელია",
    age: 22,
    faculty: "ინფორმატიკა",
    course: 3,
    gpa: 3.9
  };

  
  console.log(student);


  // Dot Notation
console.log(student.name);   // "ირაკლი კვარაცხელია"
console.log(student.age);    // 22
console.log(student.faculty);// "ინფორმატიკა"
console.log(student.course); // 3
console.log(student.gpa);    // 3.9

// Bracket Notation
console.log(student["name"]);    // "ირაკლი კვარაცხელია"
console.log(student["age"]);     // 22
console.log(student["faculty"]); // "ინფორმატიკა"
console.log(student["course"]);  // 3
console.log(student["gpa"]);     // 3.9



console.log(`სტუდენტის სახელი არის ${student.name}, ასაკი ${student.age} წელი, სწავლობს ${student.faculty}-ის ფაკულტეტზე, კურსი ${student.course}, საშუალო ქულა არის ${student.gpa}.`);







