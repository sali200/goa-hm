class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log("Woof!");
    }
}





const myDog = new Dog("Buddy");


console.log(myDog.name); 


myDog.bark(); 


class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}





displayInfo() 
    console.log(`This is a ${this.year} ${this.make} ${this.model}.`);

    const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2018);








class OtherDog{
     call(name){
        this.call=name
     }
}

const OtherDogName = new OtherDog('Moli')

console.log(`my dog's name is ${otherDogName}`)





class OtherDog{
    call(name){
       this.name= name;
    };
};

call() ;{
   return  `Come here, ${this.name}!`;

};

let A = new OtherDog("Moli")

console.log(`my dog's name is ${A.name }`)


