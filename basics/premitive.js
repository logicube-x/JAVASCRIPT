// Number , String ,Boolean, null, undefined, Symbol

let num=10;
console.log(typeof(num));


let n1= new Number(20);
console.log(typeof(n1)); /*by this we can say that a prem daTy can be converted into non p*/

let userName="Arsh";
console.log(typeof(userName));      


let isLoggedIn=true;
console.log(typeof(isLoggedIn));

let name;
console.log(typeof(name)); /*undefined*/

let lName=null;

console.log(typeof(lName));

let Mname="Arsh Amin Mansuri";

console.log(typeof(Mname)
);

greet= Mname+" Wlecome"

console.log(greet);
console.log(typeof(greet));

let greetMessage=`Hello ${Mname}`
console.log(greetMessage);

let smy1=Symbol();
let smy2=Symbol("Arsh");

console.log(smy1);
console.log(smy2);