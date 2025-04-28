let person = (name = 'salome',lastName = 'Moseshvili') => {
    console.log(`my name is ${name} and lastname is ${lastName}`)
};




let numbers = [1,2,3,4,5,6,7,8,9,10]

for(let num of numbers){
    console.log(num)
}

let market = {
    phone: 3999,
    laptop: 87843,
    mouse: 23,
}

for(A in market){
    console.log(`objects ${A} prices ${market[A]}`)
}

let lessons = ['math','georgian','french']

const [first, second, third] = lessons;

const name = 'salome'
const city = 'tbilisi'

const B = {name , city}
console.log(B)


function C (age  = 11){
    console.log(age)
}