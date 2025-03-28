const About = [
    48,   
    "გამარჯობა",   
    9.1,          
    false,           
    {               
      name: "salome",
      surname: "moseshvili",
      age: 2025,
      country: "georgia",
      city: "tbilisi"
    }
  ];
  
  const me = About[4];
const sentence = `ჩემი სახელია ${me.name}, ჩემი გვარია ${me.surname}, ჩემი ასაკია ${me.age}, ჩემი ქვეყანა არის ${me.country}, და ჩემი ქალაქი არის ${me.city}.`;

console.log(sentence);

