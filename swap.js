let a = 10;
let b = 20;

a = a ^ b; //30
b = a ^ b; //10
a = a ^ b; //20

console.log(a);
console.log(b); 
//output a=20,b=10;
//xor agar dono same toh 0 else 1 result mein