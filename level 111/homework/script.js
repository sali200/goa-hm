
let paragraph = document.createElement("p");
paragraph.textContent = "This is a paragraph.";

document.body.appendChild(paragraph);


let subheading = document.createElement("h2");
subheading.textContent = "Subheading";

document.body.appendChild(subheading);

subheading.textContent = "Updated Subheading";



// Step 1: Create a new <div> element
let divElement = document.createElement("div");
divElement.textContent = "This is a div";

// Step 2: Append the <div> element to the body
document.body.appendChild(divElement);

// Step 3: Remove the <div> element from the body
document.body.removeChild(divElement);







// Step 1: Create a new <ul> element
let ulElement = document.createElement("ul");

// Step 2: Create and append three <li> child elements
for (let i = 1; i <= 3; i++) {
    let liElement = document.createElement("li");
    liElement.textContent = `Item ${i}`;
    ulElement.appendChild(liElement);
}

// Append the <ul> element to the body
document.body.appendChild(ulElement);

// Step 3: Access and log the first and last child elements
console.log(ulElement.firstElementChild.textContent); // Logs "Item 1"
console.log(ulElement.lastElementChild.textContent); // Logs "Item 3"










// Step 1: Create a new <h3> element
let h3Element = document.createElement("h3");
h3Element.textContent = "Inserted Heading";

// Step 2: Insert the <h3> element before the first child of the body
document.body.insertBefore(h3Element, document.body.firstChild);









// Step 1: Create a new <span> element
let spanElement = document.createElement("span");
spanElement.textContent = "This is a span";

// Step 2: Append the <span> element to an existing <div> element with the id "container"
let containerDiv = document.getElementById("container");
if (containerDiv) {
    containerDiv.appendChild(spanElement);

    // Step 3: Access and log the parent element of the <span> element
    console.log(spanElement.parentElement); // Logs the <div id="container"> element
} else {
    console.log("Element with id 'container' not found");
}

