let academy = {
    name: "goa",
    courses: ["JavaScript", "Python", "HTML/CSS"],
    socialLink: "goa",
    reviews: [
        {
            name: "maxo",
            status: "parent",
            review: "Excellent courses and great instructors."
        },
        {
            name: "andria",
            status: "child",
            review: "Loved the interactive lessons and practical projects."
        },
        {
            name: "Alex",
            status: "parent",
            review: "The course materials are top-notch and easy to follow."
        }
    ]
};



let propertyValueList = Object.entries(academy);
console.log(propertyValueList);



let propertyList = Object.keys(academy);
console.log(propertyList);



let hasProperty = academy.hasOwnProperty("courses");
console.log(hasProperty);



Object.freeze(academy);

let isFrozen = Object.isFrozen(academy);
console.log(isFrozen);


