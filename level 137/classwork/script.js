const A = new Set(); 

A.add(1);
A.add(2);
A.add(3); 

A.delete(2); 

console.log(A.has(2));
console.log(A.size); 

A.clear(); 

console.log(A.size); 