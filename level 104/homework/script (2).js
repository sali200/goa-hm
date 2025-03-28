let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
let arr3 = [true, false];


let mergedArray = arr1.concat(arr2);


mergedArray.copyWithin(5, 0, 3);


mergedArray.fill(0, 6);


mergedArray.pop();

mergedArray.shift();

mergedArray.unshift(100, 200);


mergedArray.splice(2, 2, ...arr3);


let slicedArray = mergedArray.slice(-5);


let resultString = slicedArray.join(',');


function comprehensiveArrayTask(arr1, arr2, arr3) {
    // Step 1: Concatenate arr1 and arr2 into mergedArray
    let mergedArray = arr1.concat(arr2);
    
    // Step 2: Copy the first three elements of mergedArray to the positions starting from index 5
    mergedArray.copyWithin(5, 0, 3);
    
    // Step 3: Replace elements from index 6 to the end with the number 0
    mergedArray.fill(0, 6);
    
    // Step 4: Remove the last element
    mergedArray.pop();
    
    // Step 5: Remove the first element
    mergedArray.shift();
    
    // Step 6: Add the elements 100 and 200 to the beginning of mergedArray
    mergedArray.unshift(100, 200);
    
    // Step 7: Remove the elements at indices 2 and 3 and replace them with the elements of arr3
    mergedArray.splice(2, 2, ...arr3);
    
    // Step 8: Create a new array slicedArray that contains the last five elements of mergedArray
    let slicedArray = mergedArray.slice(-5);
    
    // Step 9: Create a string from slicedArray, with elements separated by a comma
    let resultString = slicedArray.join(',');
    
    return resultString;
}


console.log(comprehensiveArrayTask(arr1, arr2, arr3));











let students = ['Alice', 'Bob', 'Charlie'];
let grades = [85, 92, 78];



function addStudent(studentName, studentGrade) {
    students.unshift(studentName);
    grades.unshift(studentGrade);
    return {students, grades};
}

function removeLastStudent() {
    students.pop();
    grades.pop();
    return {students, grades};
}


function replaceGrade(index, newGrade) {
    grades.splice(index, 1, newGrade);
    return grades;
}



function updateGrades(newGrade) {
    grades.fill(newGrade);
    return grades;
}


// Add a student and grade
function addStudent(studentName, studentGrade) {
    students.unshift(studentName);
    grades.unshift(studentGrade);
    return {students, grades};
}

// Remove the last student and grade
function removeLastStudent() {
    students.pop();
    grades.pop();
    return {students, grades};
}

// Replace the grade of a student by their index
function replaceGrade(index, newGrade) {
    grades.splice(index, 1, newGrade);
    return grades;
}

// Update all grades to a specific value
function updateGrades(newGrade) {
    grades.fill(newGrade);
    return grades;
}

// Example usage
console.log(addStudent('David', 88));
console.log(removeLastStudent());
console.log(replaceGrade(1, 95));
console.log(updateGrades(90));







function addSong(songTitle) {
    playlist.unshift(songTitle);
    return playlist;
}


function removeLastSong() {
    playlist.pop();
    return playlist;
}


function moveSongs() {
    playlist.copyWithin(-2, 0, 2);
    return playlist;
}


function combinePlaylists(secondPlaylist) {
    return playlist.concat(secondPlaylist);
}


let playlist = ['Song1', 'Song2', 'Song3'];

// Add a song to the beginning of the playlist
function addSong(songTitle) {
    playlist.unshift(songTitle);
    return playlist;
}

// Remove the last song from the playlist
function removeLastSong() {
    playlist.pop();
    return playlist;
}

// Move the first two songs to the end of the playlist
function moveSongs() {
    playlist.copyWithin(-2, 0, 2);
    return playlist;
}

// Combine the current playlist with a second playlist
function combinePlaylists(secondPlaylist) {
    return playlist.concat(secondPlaylist);
}

// Example usage
console.log(addSong('NewSong'));
console.log(removeLastSong());
console.log(moveSongs());
console.log(combinePlaylists(['ExtraSong1', 'ExtraSong2']));







let cartItems = ['Apple', 'Banana', 'Cherry'];
let prices = [1.2, 0.8, 2.5];


function addItem(item, price) {
    cartItems.unshift(item);
    prices.unshift(price);
    return {cartItems, prices};
}




function removeFirstItem() {
    cartItems.shift();
    prices.shift();
    return {cartItems, prices};
}



function replaceItem(index, newItem, newPrice) {
    cartItems.splice(index, 1, newItem);
    prices.splice(index, 1, newPrice);
    return {cartItems, prices};
}


function createReceipt() {
    return cartItems.join(', ');
}


function applyDiscount(discountPrice) {
    prices.fill(discountPrice);
    return prices;
}



// Add an item and its price
function addItem(item, price) {
    cartItems.unshift(item);
    prices.unshift(price);
    return {cartItems, prices};
}

// Remove the first item and its price
function removeFirstItem() {
    cartItems.shift();
    prices.shift();
    return {cartItems, prices};
}

// Replace an item and its price by their index
function replaceItem(index, newItem, newPrice) {
    cartItems.splice(index, 1, newItem);
    prices.splice(index, 1, newPrice);
    return {cartItems, prices};
}

// Create a receipt string from cartItems
function createReceipt() {
    return cartItems.join(', ');
}

// Apply a discount price to all prices
function applyDiscount(discountPrice) {
    prices.fill(discountPrice);
    return prices;
}

// Example usage
console.log(addItem('Orange', 1.5));
console.log(removeFirstItem());
console.log(replaceItem(1, 'Grapes', 2.0));
console.log(createReceipt());
console.log(applyDiscount(1.0));










let library = [
    {title: 'Book1', copies: 5},
    {title: 'Book2', copies: 3},
    {title: 'Book3', copies: 4}
];



function addBook(book) {
    library.push(book);
    return library;
}




function removeLastBook() {
    library.pop();
    return library;
}


function updateBookCopies(title, newCopies) {
    let index = library.findIndex(book => book.title === title);
    if (index !== -1) {
        library.splice(index, 1, {...library[index], copies: newCopies});
    }
    return library;
}



function listBooks() {
    return library.map(book => book.title).join(', ');
}


function extractBooks() {
    return library.slice(0, 2);
}



function modifyBooks() {
    library.copyWithin(-1, 0, 1);
    return library;
}


function resetCopies(newCopies) {
    library.fill({copies: newCopies}, 0, library.length);
    return library;
}


function removeFirstBook() {
    library.shift();
    return library;
}



function addFirstBook(book) {
    library.unshift(book);
    return library;
}



// Add a book to the library
function addBook(book) {
    library.push(book);
    return library;
}

// Remove the last book from the library
function removeLastBook() {
    library.pop();
    return library;
}

// Update the copies of a specified book
function updateBookCopies(title, newCopies) {
    let index = library.findIndex(book => book.title === title);
    if (index !== -1) {
        library.splice(index, 1, {...library[index], copies: newCopies});
    }
    return library;
}

// List all book titles as a string
function listBooks() {
    return library.map(book => book.title).join(', ');
}

// Extract a portion of the library array
function extractBooks() {
    return library.slice(0, 2);
}

// Modify the books array by copying the first book to the last position
function modifyBooks() {
    library.copyWithin(-1, 0, 1);
    return library;
}

// Reset the copies of all books to a specified number
function resetCopies(newCopies) {
    library.fill({copies: newCopies}, 0, library.length);
    return library;
}

// Remove the first book from the library
function removeFirstBook() {
    library.shift();
    return library;
}

// Add a book to the beginning of the library
function addFirstBook(book) {
    library.unshift(book);
    return library;
}

// Example usage
console.log(addBook({title: 'Book4', copies: 6}));
console.log(removeLastBook());
console.log(updateBookCopies('Book2', 7));
console.log(listBooks());
console.log(extractBooks());
console.log(modifyBooks());
console.log(resetCopies(10));
console.log(removeFirstBook());
console.log(addFirstBook({title: 'Book5', copies: 2}));
