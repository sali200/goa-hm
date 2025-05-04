let person = {
    firstName: "სალომე",
    lastName: "მოსეშვილი",
    age: 10,  
    weight: 59,  
    height: 153,  
    family: {
        mother: {
            firstName: "ქეთი",
            lastName: "გოგოლაძე",
            age: 40,
            relation: "დედა"
        },
        father: {
            firstName: "რამაზი",
            lastName: "მოსეშვილი",
            age: 42,
            relation: "მამა"
        },
        siblings: [
            {
                firstName: "ლუკა",
                lastName: "მოსეშვილი",
                age: 3,
                relation: "ძმა"
            }
        ]
    }
};

console.log(person);
